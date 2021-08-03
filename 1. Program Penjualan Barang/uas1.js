function hitung()
        {
            var harga = parseFloat (document.isianku.harga.value);
            if (isNaN (harga)) 
            {
                harga=0.0;
            }

            var jumlah = parseFloat (document.isianku.jumlah.value);
            if (isNaN (jumlah)) 
            {
                jumlah=0.0;    
            }

            var diskon = parseFloat (document.isianku.diskon.value);

            var total_beli = harga*jumlah;
            document.isianku.total_beli.value="Rp "+total_beli;

            var diskon = total_beli * 0.1;
            document.isianku.diskon.value="Rp "+diskon;

            var total_bayar = total_beli - diskon;
            document.isianku.bayar.value="Rp "+total_bayar;
        }