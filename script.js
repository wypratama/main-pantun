const soal = [
                'Satu tambah satu sama dengan dua',
                'Burung perkutut, burung kutilang',
                'Ikan hiu makan dinamit',
                'Dapet kado isinya tomat',
                'Buka Facebook, pake kata sandi',
                'Ke pasar, nyari obat gatal',
                'Ikan hiu lagi berantem',
                'Ikan hiu berenang-renang',
                'Bola pingpong dimakan gelatik',
                'Ikan hiu makan badak',
                'Buah nangka buah manggis',
                'Buah apel di air payau',
                'Di sini bingung, di sana linglung',
                'Baju batik di atas pohon',
                'Jaka sembung bawak golok',
                'Jalan kaki ke pasar rebo',
                'Baju merah punya mang oding',
                'Minum jamu makan nangka',
                'Kotak amal di goyang-goyang',
                'Mata belo, ala komedian',
                'Pake gincu, pergi ke pasar',
                'Good morning, selamat pagi',
                'Keripik belut, dimakan sama kerang',
                'Makan semur, masih anget',
                'Saringan santan, mahal harganya',
                'Barang antik, ditarik andong',
                'Jangan jahil, apalagi ke tukang jamu',
                'Air cuka, bikin mules',
                'Punya ragi di atas loyang',
                'Besi berkarat ditimpa jalan',
                'Saringan pelet kena rambut',
                'Bola pingpong dimakan gelatik',
                'Buah nangka buah manggis',
                'Baju batik di atas pohon',
                'Baju merah punya mang oding',
                'Minum jamu makan nangka',
                'Ikan hiu makan dinamit',
                'Dapet kado isinya tomat',
                'Anak tikus rindu ibunya',
                'Ada kepompong ada kupu',
                'Buah semangka berdaun sirih',
                'Satu titik dua koma',
                'Buah duren buah kedondong',
                'Minum sekoteng di batu karang',
                'Kotak amal digoyang-goyang',
                'Hewan marmut putih warnanya',
                'Air cuka air mata',
                'Buah manggis air mendidih',
                'Tuan Raja masuk ke kamar',
                'Minum jamu makan nangka',
                'Bikin atap dari lontar',
                'Baju batik di atas pohon',
                'Bikin atap dari lontar',
                'Ikan hiu makan badak',
                'Burung gelatik terlihat anteng',
                'Bunga merekah di tengah kota',
                'Roti busuk dalam penjara',
                'Pohon benalu di pohon randu',
                'Haus minum, badan segar',
                'Mata belo, ala komedian',
                'Dulu delman, sekarang gokar',
                'Satu titik di kertas koran',
                'Satu titik tiada koma',
                'Ikan tongkol dari juragan',
                'Cari umpan ikan lima',
                'Kancil makan di perigi',
                'Baju batik jamu bidara',
                'Rumah perdu berjendela kaca',
                'Burung gelatik bagus ekornya',
                'Ada unta di gurun sahara'
            ]


let skor = 0
            
function pilihSoal() {
    return document.getElementById("baris-pertama").innerHTML = soal[Math.floor(Math.random() * soal.length)] 
}

function ramein(input) {
    if (input == true) {
        return document.getElementById("rame").innerHTML = `Cakeeeep!!!!`
    } else  {
        return document.getElementById("rame").innerHTML = `Begimane Ceritanye Tong!! Cuma Dapet Skor ${skor} Ni!!`
    }
}

function sukuKata (input) {
    const abjad = 'aiueoAIUEO'
    const konsonan = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM '
    let sukat = 0
    for (let e = 0; e < input.length; e++) {
        for (let f = 0; f < abjad.length; f++) {
            if (input[e] == abjad[f]) {
                for (let h = 0; h < konsonan.length; h++) {
                    if (input[e+1] == konsonan[h]) {
                        sukat++
                    }
                }
                if (input[e+1] == abjad[f]) {
                    sukat++
                } else if (input[e] == abjad[f] &&
                            e == input.length-1) {
                    sukat++
                } else {
                    for (let g = 0; g < abjad.length; g++) {
                        if (input[e] == abjad[f] &&
                            input[e+1 == abjad[g]]) {
                                sukat++
                            }
                    }
                } 
            }
        }
    }
    return sukat
}

function cekIsi (input) {
    let kata = []
    let soal = ''
    for (let a = 0; a < input.length; a++) {
        if (input[input.length-a-1] != ' ') {
            kata.push(input[input.length-a-1])
        } else if (input[input.length-a-1] == ' ' || input.length-a-1 == 0) {
            break;
        }
    }

    for (let b = 0; b < kata.length; b++) {
        soal += kata[kata.length-b-1]
    }

    return soal    
}

pilihSoal()


function penilaian() {
    const abjad = 'aiueoAIUEO'
    const soalan = document.getElementById("baris-pertama").innerHTML
    let x = document.forms["jawaban"]["jawab"].value;
    let jumlahSuku = sukuKata(x)
    let isiJawab = cekIsi(x)
    let isiSoal = cekIsi(soalan)

    if (jumlahSuku > 2 && jumlahSuku < 13 && isiJawab != isiSoal) {
        for (let a = 0; a < abjad.length; a++) {
            if (x[x.length-1] == abjad[a]) {
                for (let b = 0; b < abjad.length; b++) {
                    if (x[x.length-2] == abjad[b]) {
                        if (x[x.length-1] == soalan[soalan.length-1]&& 
                            x[x.length-2] == soalan[soalan.length-2]) {
                                ramein(true);
                                pilihSoal()
                                skor += 100
                                return false;
                        } 
                    }
                }
                if (x[x.length-1] == soalan[soalan.length-1]) {
                    ramein(true);
                    pilihSoal()
                    skor += 100
                    return false;
                }
            }
            if (x[x.length-2] == abjad[a]) {
                for (let c = 0; c < abjad.length; c++) {
                    if (x[x.length-3] == abjad[c]) {
                        if (x[x.length-1] == soalan[soalan.length-1] &&
                            x[x.length-2] == soalan[soalan.length-2] && 
                            x[x.length-3] == soalan[soalan.length-3]) {
                                ramein(true);
                                pilihSoal()
                                skor += 100
                                return false;
                        } 
                    }
                }
                if (x[x.length-1] == soalan[soalan.length-1] &&
                    x[x.length-2] == soalan[soalan.length-2]) {
                    ramein(true);
                    pilihSoal()
                    skor += 100
                    return false;
                }
            }
            if (x[x.length-3] == abjad[a]) {
                for (let d = 0; d < abjad.length; d++) {
                    if (x[x.length-4] == abjad[d]) {
                        if (x[x.length-1] == soalan[soalan.length-1] &&
                            x[x.length-2] == soalan[soalan.length-2] &&
                            x[x.length-3] == soalan[soalan.length-3] && 
                            x[x.length-4] == soalan[soalan.length-4]) {
                                ramein(true);
                                pilihSoal()
                                skor += 100
                                return false;
                        } 
                    }
                }
                if (x[x.length-1] == soalan[soalan.length-1] &&
                    x[x.length-2] == soalan[soalan.length-2] &&
                    x[x.length-3] == soalan[soalan.length-3]) {
                    ramein(true);
                    pilihSoal()
                    skor += 100
                    return false;
                }
            }
        }    
    }

    ramein(false);
    skor = 0
            return false;
    

}
