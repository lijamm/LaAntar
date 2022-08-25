function validasi() {
    var Nama = document.getElementById("Nama").value;
    var Alamat = document.getElementById("Alamat").value;
    var pesanan = document.getElementById("pesanan").value;
    if (Nama != "" && Alamat != "" && pesanan != "") {
        alert('Terima Kasih Telah Melakukan Pesanan, Pesanan Akan Dikirim sesuai dengan data yang anda isi');
    } else {
        alert('Anda harus mengisi Data dengan lengkap !');
    }
}