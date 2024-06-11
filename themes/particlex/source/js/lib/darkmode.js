mixins.darkmode = {
    data() { return { isDark: false }; },
    created() {
        let colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (!sessionStorage.getItem("NotFirstVisit") && colorTheme.matches) {
            this.switchDark(); sessionStorage.setItem("NotFirstVisit", true);
        } else { sessionStorage.setItem("NotFirstVisit", true); }
        sessionStorage.getItem("isDrek") ? this.switchDark() : this.switchLight();
        colorTheme.addEventListener('change', e => {
            e.matches ? this.switchDark() : this.switchLight();
        });
    },
    methods: {
        switchDark() {
            this.isDark = true;
            sessionStorage.setItem("isDrek", true);
            document.documentElement.classList.add("dark");
            document.querySelector("#darkstyle").removeAttribute("disabled");
            try {
                document.querySelector("#highlight-darkstyle").removeAttribute("disabled");
            } catch { }
        },
        switchLight() {
            this.isDark = false;
            sessionStorage.removeItem("isDrek");
            document.documentElement.classList.remove("dark");
            document.querySelector("#darkstyle").setAttribute("disabled", "");
            try {
                document.querySelector("#highlight-darkstyle").setAttribute("disabled", "");
            } catch { }
        },
        handleThemeSwitch() { this.isDark ? this.switchLight() : this.switchDark(); },
    },
};
