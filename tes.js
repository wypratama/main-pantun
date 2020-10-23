const abjad = 'aiueoAIUEO'
const konsonan = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM '


function sukuKata (input) {
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
console.log(sukuKata('se'))

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

console.log(cekIsi('makan nasi pake sayur'))