mixins.darkmode = {
    data() { return { dark: false }; },
    created() {
        let colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeMediaQuery.addEventListener('change', e => {
            if (e.matches) {
                this.dark = true;
            } else {
                this.dark = false;
            }
        });
    },
    methods: {
        handleThemeSwitch() {
            this.dark = this.dark ? false : true;
            if (this.dark) {
                console.log("黑")
                document.querySelector("#highlight-darkstyle").removeAttribute("disabled");
            } else {
                console.log("光")
                document.querySelector("#highlight-darkstyle").setAttribute("disabled", "");
            }
        },
    },
};
