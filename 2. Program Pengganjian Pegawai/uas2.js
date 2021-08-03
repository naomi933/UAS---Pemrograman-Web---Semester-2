 function hitung()
        {
            var jam = parseFloat (document.isianku.jam.value);
            if (isNaN (jam)) 
            {
                jam=0.0;
            }

            var upah = parseFloat (document.isianku.upah.value);
            if (isNaN (upah)) 
            {
                upah=0.0;    
            }

            var tunjangan = parseFloat (document.isianku.tunjangan.value);

            var gaji = jam*upah;
            document.isianku.gaji.value="Rp "+gaji;

            var tunjangan = gaji * 0.1;
            document.isianku.tunjangan.value="Rp "+tunjangan;

            var total = gaji + tunjangan;
            document.isianku.total.value="Rp "+total;
        }