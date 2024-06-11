<?php
include 'connection.php';


if (isset($_POST['submit'])) {
    $nim = mysqli_real_escape_string($conn, $_POST['nim']);
    $nama = mysqli_real_escape_string($conn, $_POST['nama']);
    $alamat = mysqli_real_escape_string($conn, $_POST['alamat']);

    $insert = "INSERT INTO mahasiswa(nim, nama, alamat) VALUES('$nim','$nama','$alamat')";
    mysqli_query($conn, $insert);
    echo "Data Berhasil Ditambahkan";
    header('location:insert.php');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- tailwind cdn -->
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Insert Pages</title>
</head>

<body class=" bg-slate-300 h-screen">
    <!-- container -->
    <div class="flex justify-center items-center h-screen">
        <div class="bg-gray-400 w-56 h-80 rounded-lg">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <h1 class="text-center text-4xl text-white">Insert Data</h1>
                </div>
                <div>
                    <form action="" method="POST" class="flex flex-col">
                        <label for="nim">NIM : </label>
                        <input type="number" name="nim" id="nim">
                        <br>
                        <label for="nama">Nama :</label>
                        <input type="text" name="nama" id="nama">
                        <br>
                        <label for="alamat">Alamat :</label>
                        <input type="text" name="alamat" id="alamat">
                        <br>
                        <div class=" bg-blue-400 h-10 w-full flex items-center justify-center rounded-lg">
                            <button type="submit" name="submit">Tambah Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>