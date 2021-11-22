let consonants = [ 
    "/Thai Consonant/00.Gaw-gai.svg",
    "/Thai Consonant/01.Kaw Kai.svg",
    "/Thai Consonant/02.Kaw Kuat.svg",
    "/Thai Consonant/03.Kaw Kwai.svg",
    "/Thai Consonant/04.Kaw Kon.svg",
    "/Thai Consonant/05.Kaw Ra Kang.svg",
    "/Thai Consonant/06.Ngaw Ngoo.svg",
    "/Thai Consonant/07.Jaw Jaan.svg",
    "/Thai Consonant/08.Chaw ching.svg",
    "/Thai Consonant/09.Chaw chaang.svg",
    "/Thai Consonant/10.Saw So.svg",
    "/Thai Consonant/11.Chaw cher.svg",
    "/Thai Consonant/12.Yaw Ying.svg",
    "/Thai Consonant/13.Daw cha da.svg",
    "/Thai Consonant/14.Tdaw pba tdak.svg",
    "/Thai Consonant/15.Thaw Thaan.svg",
    "/Thai Consonant/16.Thaw mon tho.svg",
    "/Thai Consonant/17.Thaw poo thao.svg",
    "/Thai Consonant/18.Naw Nain.svg",
    "/Thai Consonant/19.Daw Dek.svg",
    "/Thai Consonant/20.Tdaw Tdao.svg",
    "/Thai Consonant/21.Thaw Thung.svg",
    "/Thai Consonant/22.Thaw tha haan.svg",
    "/Thai Consonant/23.Thaw Thong.svg",
    "/Thai Consonant/24.Naw Noo.svg",
    "/Thai Consonant/25.Baw bai mai.svg",
    "/Thai Consonant/26.Pbaw Pbla.svg",
    "/Thai Consonant/27.Phaw Phaung.svg",
    "/Thai Consonant/28.Faw Faa.svg",
    "/Thai Consonant/29.Phaw Phaan.svg",
    "/Thai Consonant/30.Faw Fun.svg",
    "/Thai Consonant/31.Phaw sam phao.svg",
    "/Thai Consonant/32.Maw Maa.svg",
    "/Thai Consonant/33.Yaw Yak.svg",
    "/Thai Consonant/34.Raw reua.svg",
    "/Thai Consonant/35.Law Ling.svg",
    "/Thai Consonant/36.Waw Waen.svg",
    "/Thai Consonant/37.Saw saa laa.svg",
    "/Thai Consonant/38.Saw reu si.svg",
    "/Thai Consonant/39.Saw Seua.svg",
    "/Thai Consonant/40.Haw Heep.svg",
    "/Thai Consonant/41.Law chu laa.svg",
    "/Thai Consonant/42.aw aang.svg",
    "/Thai Consonant/43.Haw nok hook.svg"
];

let photo = document.getElementById("photo");



function changePhoto(){
    photo.src = consonants[Math.floor(Math.random() * consonants.length)];
    console.log(photo.src);
};
