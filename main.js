const splashes = [
    "it's not Voxelbugged",
    "Something lol.",
    "dot github dot io",
    "the home of all that's voxel and bugged",
    "eh? Ha! Heh heh.",
    "the pusia & zenia show",
    "15 seconds of quality entertainment",
    "wow.",
    "© voxelius l. bugson 1410",
    "powering exasperation",
    "voxelbugged",
    "hola obama",
    "what's this about pixels and worms?",
    "regilding the gold factory since 2024",
    "2voxel4bugged",
    "sound the 7th trumpet",
    "splashin' my text all over the place",
    "how does the voxel bugged?",
    "but who bugged the voxel?",
    "stay hungary. stay polish."
]

const disclaimers = [
    "voxelbugged.github.io is not a website. in the event that voxelbugged.github.io manifests itself in your web browser's viewport, remain calm and contact your local voxelbugged.github.io containment supervisor. make no further attempt to contain voxelbugged.github.io yourself. do not close this page unless instructed to.",
    "voxelbugged.github.io would like to inform you that i don't like this footer. please refresh the website until you get a better one.",
    "voxelbugged.github.io is not responsible for any injury, property damage, antiperty damage, sentient cloud takeover, attempted alien communication, or altered mind state that may arise as a direct result of coming in contact with the website. it is, however, responsible for that one time you left your keys in the door.",
    "accessing voxelbugged.github.io requires an active monthly subscription of $2,000 (SRD). thanks to our innovative new banking technology, to ensure a smooth user experience, you have already been billed in advance for the first 36 months. thank you for supporting voxelbugged.github.io!",
    "it has come to our attention that voxelbugged.github.io might not be real. in the event that you have accessed voxelbugged.github.io, this may be taken as a hint that you too do not actually exist, and therefore voxelbugged.github.io may legally expropriate your personal belongings. thank you for supporting voxelbugged.github.io!",
    "due to the cubic nature of voxelbugged.github.io, the official voxelbugged.github.io 3D web browser is recommended for the best viewing experience. the installation instructions are located on the eastern face of the website, which can be easily found by following the map on the back."
]

var splashElement = document.getElementById("splash");
splashElement.innerText = splashes[Math.floor(Math.random() * splashes.length)];

var disclaimerElement = document.getElementById("disclaimer");
disclaimerElement.innerText = disclaimers[Math.floor(Math.random() * disclaimers.length)];
