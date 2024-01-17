document.getElementById("square-form").onsubmit = function(event) {
    event.preventDefault();

    let sisi = document.getElementById("sisi").value;
    if (sisi) {
        sisi = parseFloat(sisi);
        let luas = sisi * sisi;
        let keliling = 4 * sisi;

        luas = (luas % 1 === 0) ? luas : luas.toFixed(2);
        keliling = (keliling % 1 === 0) ? keliling : keliling.toFixed(2);

        document.getElementById("luas").textContent = luas;
        document.getElementById("keliling").textContent = keliling;
    } else {
        alert("Mohon masukkan panjang sisi persegi!");
    }
};
