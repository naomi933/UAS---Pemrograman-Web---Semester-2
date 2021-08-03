function checkbox()
        {
            var harga = "";
            if (table.pilih[0].checked)
            {
                harga = 2000000;
                document.table.harga.value=harga;
            }
            if (table.pilih[1].checked)
            {
                harga = 2500000;
                document.table.harga.value=harga;
            }
            if (table.pilih[2].checked)
            {
                harga = 1500000;
                document.table.harga.value=harga;
            }
        }
        function hitung()
        {
            var diskon ="";
            var harga = parseFloat(document.table.harga.value)
            if (isNaN (harga))
            {
                harga = 0.0;
            }
            var jumlah = parseFloat(document.table.jumlah.value)
            if (isNaN (jumlah))
            {
                jumlah = 0.0;
            }
            var subtotal = harga * jumlah;
            document.table.subtotal.value="Rp "+subtotal;
            var pajak = subtotal * 0.1;
            document.table.pajak.value="Rp "+pajak;
            var totalbayar = subtotal + pajak;
            document.table.totalbayar.value="Rp "+totalbayar;
        }