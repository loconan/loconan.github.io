function afficherImage1() {
    document.getElementById("img1").setAttribute('style', 'width: 40%; display:inline-block; padding-left:30%;  padding-right:30%;');
    document.getElementById("img2").setAttribute('style', 'display:none;');
}

function afficherImage2() {
    document.getElementById("img2").setAttribute('style', 'width: 40%; display:inline-block; padding-left:30%;  padding-right:30%;');
    document.getElementById("img1").setAttribute('style', 'display:none;');
}

document.getElementById("img1").addEventListener("click", afficherImage2);
document.getElementById("img2").addEventListener("click", afficherImage1);

