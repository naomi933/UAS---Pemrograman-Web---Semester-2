	function hitungtotal(){

			var nama = (document.form.inama.value);
			var namabarang = (document.form.namabarang.value);
			var jumlahbarang = parseFloat (document.form.ijumlah.value);
			var ht = 0.0 ;
			var sub = 0.0;
			var diskon = 0.0;
			var total = 0.0;
			if (namabarang == "Monitor") {

				ht = 200000;
			}
			else if(namabarang == "CPU")
			{
				ht = 250000;
			}
			else
			{
				ht = 150000;
			}

			sub = jumlahbarang*ht;

			if (document.form.imamber.checked == true) 
			{
				diskon = 0.10 * sub;
			}
			else
			{
				diskon=0.0;
			}
			total = sub - diskon;
			document.form.otiket.value=eval(ht);
			document.form.osub.value=eval(sub);
			document.form.odiskon.value=eval(diskon);
			document.form.ototal.value=eval(total);  
		}
