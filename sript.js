/*let typed = new Typed('#dynamic-text', {
        strings: ['Thanks to Hacktiv8!!'],
        typeSpeed: 80,
        backSpeed: 30,

        // digunakan jika ingin looping terus-menerus
        loop: true
        });*/

        contactMe = () => {
            // event.preventDefault();
            console.log("a");
    
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Terima kasih telah menghubungi saya! Nanti akan saya email untuk balasannya. Wait ya :D ",
            });
        };