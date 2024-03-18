mixins.darkmode = {
    data() { return { isDark: false }; },
    created() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                this.switchDark();
            } else {
                this.switchLight();
            }
        });
        if (sessionStorage.getItem("isDrek")) { this.switchDark(); }
    },
    methods: {
        switchDark() {
            this.isDark = true;
            sessionStorage.setItem("isDrek", true);
            document.querySelector("#highlight-darkstyle").removeAttribute("disabled");
        },
        switchLight() {
            this.isDark = false;
            sessionStorage.setItem("isDrek", false);
            document.querySelector("#highlight-darkstyle").toggleAttribute("disabled");
        },
        handleThemeSwitch() {
            if (this.isDark) {
                this.switchLight();
            } else {
                this.switchDark();
            }
        },
    },
};
