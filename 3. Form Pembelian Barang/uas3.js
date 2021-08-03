function hitungtotal(){

			var nama = (document.form.inama.value);
			var namabarang = (document.form.namabarang.value);
			var jumlah = parseFloat (document.form.jumlah.value);
			var ht = 0.0 ;
			var harga = 0.0 ;
			var total = 0.0;
			if (namabarang == "Monitor") {

				ht = 2000000;
			}
			else if(namabarang == "CPU")
			{
				ht = 2500000;
			}
			else
			{
				ht = 1500000;
			}

			var total = jumlah*ht;
			document.form.harga.value=eval(ht);
			document.form.total.value=eval(total);
		}