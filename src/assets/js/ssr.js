(function() {
    if (typeof window == "undefined") global.window = new Object();
    if (typeof document == "undefined") global.document = new Object();

    $(window).on("load", () => {
        setTimeout(() => {}, 1000);

        $.ready.then(() => {
            console.log("page load");
        });
    });

    $(".user-container").on("click", ".btn-login", () => {
        $("#exampleModalCenter").modal("show");
    });

    $(window).on("resize", () => {});
    $(window).on("scroll", () => {});
})();
