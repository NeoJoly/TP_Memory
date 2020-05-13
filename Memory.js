var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: true
        }
    },
    scene: {
      init: init,
      preload: preload,
      create: create,
      update: update
    }
}

var game = new Phaser.Game(config);


// variables


var carte_grise1; var carte_grise2; var carte_grise3; var carte_grise4; var carte_grise5; var carte_grise6;
var carte_grise7; var carte_grise8; var carte_grise9; var carte_grise10; var carte_grise11; var carte_grise12;

var nbcartebleue=0; var nbcartejaune=0; var nbcarteorange=0; var nbcarterouge=0; var nbcarteverte=0; var nbcarteviolette=0;
var rdmcarte; var emplacementcomplet=0;

var nbcarteretournee=0;
var emplacement1; var emplacement2; var emplacement3; var emplacement4; var emplacement5; var emplacement6;
var emplacement7; var emplacement8; var emplacement9; var emplacement10; var emplacement11; var emplacement12;

var emplacement1retourne=0; var emplacement2retourne=0; var emplacement3retourne=0; var emplacement4retourne=0; var emplacement5retourne=0; var emplacement6retourne=0;
var emplacement7retourne=0; var emplacement8retourne=0; var emplacement9retourne=0; var emplacement10retourne=0; var emplacement11retourne=0; var emplacement12retourne=0;  



function init(){}


function preload(){
    this.load.image('carte_grise','assets/carte_grise.png');
    this.load.image('carte_bleue','assets/carte_bleue.png');
    this.load.image('carte_jaune','assets/carte_jaune.png');
    this.load.image('carte_orange','assets/carte_orange.png');
    this.load.image('carte_rouge','assets/carte_rouge.png');
    this.load.image('carte_verte','assets/carte_verte.png');
    this.load.image('carte_violette','assets/carte_violette.png');
}


function create(){

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////****************PLACEMENT DES CARTES DOS****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // emplacement 1
    carte_grise1 = this.physics.add.image(5,5,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise1.on('pointerdown',onClickCarte1,this);
    // emplacement 2
    carte_grise2 = this.physics.add.image(155,5,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise2.on('pointerdown',onClickCarte2,this);
    // emplacement 3
    carte_grise3 = this.physics.add.image(305,5,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise3.on('pointerdown',onClickCarte3,this);
    // emplacement 4
    carte_grise4 = this.physics.add.image(455,5,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise4.on('pointerdown',onClickCarte4,this);
    // emplacement 5
    carte_grise5 = this.physics.add.image(5,205,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise5.on('pointerdown',onClickCarte5,this);
    // emplacement 6
    carte_grise6 = this.physics.add.image(155,205,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise6.on('pointerdown',onClickCarte6,this);
    // emplacement 7
    carte_grise7 = this.physics.add.image(305,205,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise7.on('pointerdown',onClickCarte7,this);
    // emplacement 8
    carte_grise8 = this.physics.add.image(455,205,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise8.on('pointerdown',onClickCarte8,this);
    // emplacement 9
    carte_grise9 = this.physics.add.image(5,405,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise9.on('pointerdown',onClickCarte9,this);
    // emplacement 10
    carte_grise10 = this.physics.add.image(155,405,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise10.on('pointerdown',onClickCarte10,this);
    // emplacement 11
    carte_grise11 = this.physics.add.image(305,405,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise11.on('pointerdown',onClickCarte11,this);
    // emplacement 12
    carte_grise12 = this.physics.add.image(455,405,'carte_grise').setOrigin(0,0).setDepth(5).setInteractive();
    carte_grise12.on('pointerdown',onClickCarte12,this);




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***************PLACEMENT DES CARTES FACE****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    while (emplacementcomplet < 12) {
        // emplacement 1
        while (emplacementcomplet == 0) {
            rdmcarte = Phaser.Math.Between(1,6);
            if (rdmcarte == 1 && nbcartebleue < 2) {
                this.physics.add.image(5,5,'carte_bleue').setOrigin(0,0).setDepth(4);
                nbcartebleue+=1;
                emplacement1="bleu";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 2 && nbcartejaune < 2) {
                this.physics.add.image(5,5,'carte_jaune').setOrigin(0,0).setDepth(4);
                nbcartejaune+=1;
                emplacement1="jaune";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 3 && nbcarteorange < 2) {
                this.physics.add.image(5,5,'carte_orange').setOrigin(0,0).setDepth(4);
                nbcarteorange+=1;
                emplacement1="orange";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 4 && nbcarterouge < 2) {
                this.physics.add.image(5,5,'carte_rouge').setOrigin(0,0).setDepth(4);
                nbcarterouge+=1;
                emplacement1="rouge";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 5 && nbcarteverte < 2) {
                this.physics.add.image(5,5,'carte_verte').setOrigin(0,0).setDepth(4);
                nbcarteverte+=1;
                emplacement1="vert";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 6 && nbcarteviolette < 2) {
                this.physics.add.image(5,5,'carte_violette').setOrigin(0,0).setDepth(4);
                nbcarteviolette+=1;
                emplacement1="violet";
                emplacementcomplet+=1
            }
        }
        

        // emplacement 2
        while (emplacementcomplet == 1) {
            rdmcarte = Phaser.Math.Between(1,6);
            if (rdmcarte == 1 && nbcartebleue < 2) {
                this.physics.add.image(155,5,'carte_bleue').setOrigin(0,0).setDepth(4);
                nbcartebleue+=1;
                emplacement2="bleu";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 2 && nbcartejaune < 2) {
                this.physics.add.image(155,5,'carte_jaune').setOrigin(0,0).setDepth(4);
                nbcartejaune+=1;
                emplacement2="jaune";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 3 && nbcarteorange < 2) {
                this.physics.add.image(155,5,'carte_orange').setOrigin(0,0).setDepth(4);
                nbcarteorange+=1;
                emplacement2="orange";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 4 && nbcarterouge < 2) {
                this.physics.add.image(155,5,'carte_rouge').setOrigin(0,0).setDepth(4);
                nbcarterouge+=1;
                emplacement2="rouge";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 5 && nbcarteverte < 2) {
                this.physics.add.image(155,5,'carte_verte').setOrigin(0,0).setDepth(4);
                nbcarteverte+=1;
                emplacement2="vert";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 6 && nbcarteviolette < 2) {
                this.physics.add.image(155,5,'carte_violette').setOrigin(0,0).setDepth(4);
                nbcarteviolette+=1;
                emplacement2="violet";
                emplacementcomplet+=1
            }
        }
        

        // emplacement 3
        while (emplacementcomplet == 2) {
            rdmcarte = Phaser.Math.Between(1,6);
            if (rdmcarte == 1 && nbcartebleue < 2) {
                this.physics.add.image(305,5,'carte_bleue').setOrigin(0,0).setDepth(4);
                nbcartebleue+=1;
                emplacement3="bleu";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 2 && nbcartejaune < 2) {
                this.physics.add.image(305,5,'carte_jaune').setOrigin(0,0).setDepth(4);
                nbcartejaune+=1;
                emplacement3="jaune";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 3 && nbcarteorange < 2) {
                this.physics.add.image(305,5,'carte_orange').setOrigin(0,0).setDepth(4);
                nbcarteorange+=1;
                emplacement3="orange";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 4 && nbcarterouge < 2) {
                this.physics.add.image(305,5,'carte_rouge').setOrigin(0,0).setDepth(4);
                nbcarterouge+=1;
                emplacement3="rouge";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 5 && nbcarteverte < 2) {
                this.physics.add.image(305,5,'carte_verte').setOrigin(0,0).setDepth(4);
                nbcarteverte+=1;
                emplacement3="vert";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 6 && nbcarteviolette < 2) {
                this.physics.add.image(305,5,'carte_violette').setOrigin(0,0).setDepth(4);
                nbcarteviolette+=1;
                emplacement3="violet";
                emplacementcomplet+=1
            }
        }
        

        // emplacement 4
        while (emplacementcomplet == 3) {
            rdmcarte = Phaser.Math.Between(1,6);
            if (rdmcarte == 1 && nbcartebleue < 2) {
                this.physics.add.image(455,5,'carte_bleue').setOrigin(0,0).setDepth(4);
                nbcartebleue+=1;
                emplacement4="bleu";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 2 && nbcartejaune < 2) {
                this.physics.add.image(455,5,'carte_jaune').setOrigin(0,0).setDepth(4);
                nbcartejaune+=1;
                emplacement4="jaune";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 3 && nbcarteorange < 2) {
                this.physics.add.image(455,5,'carte_orange').setOrigin(0,0).setDepth(4);
                nbcarteorange+=1;
                emplacement4="orange";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 4 && nbcarterouge < 2) {
                this.physics.add.image(455,5,'carte_rouge').setOrigin(0,0).setDepth(4);
                nbcarterouge+=1;
                emplacement4="rouge";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 5 && nbcarteverte < 2) {
                this.physics.add.image(455,5,'carte_verte').setOrigin(0,0).setDepth(4);
                nbcarteverte+=1;
                emplacement4="vert";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 6 && nbcarteviolette < 2) {
                this.physics.add.image(455,5,'carte_violette').setOrigin(0,0).setDepth(4);
                nbcarteviolette+=1;
                emplacement4="violet";
                emplacementcomplet+=1
            }  
        }
        

        // emplacement 5
        while (emplacementcomplet == 4) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(5,205,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement5="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(5,205,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement5="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(5,205,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement5="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(5,205,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement5="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(5,205,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement5="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(5,205,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement5="violet";
            emplacementcomplet+=1
        }
        }
        

        // emplacement 6
        while (emplacementcomplet == 5) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(155,205,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement6="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(155,205,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement6="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(155,205,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement6="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(155,205,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement6="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(155,205,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement6="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(155,205,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement6="violet";
            emplacementcomplet+=1
        }
        }
        

        // emplacement 7
        while (emplacementcomplet == 6) {
            rdmcarte = Phaser.Math.Between(1,6);
            if (rdmcarte == 1 && nbcartebleue < 2) {
                this.physics.add.image(305,205,'carte_bleue').setOrigin(0,0).setDepth(4);
                nbcartebleue+=1;
                emplacement7="bleu";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 2 && nbcartejaune < 2) {
                this.physics.add.image(305,205,'carte_jaune').setOrigin(0,0).setDepth(4);
                nbcartejaune+=1;
                emplacement7="jaune";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 3 && nbcarteorange < 2) {
                this.physics.add.image(305,205,'carte_orange').setOrigin(0,0).setDepth(4);
                nbcarteorange+=1;
                emplacement7="orange";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 4 && nbcarterouge < 2) {
                this.physics.add.image(305,205,'carte_rouge').setOrigin(0,0).setDepth(4);
                nbcarterouge+=1;
                emplacement7="rouge";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 5 && nbcarteverte < 2) {
                this.physics.add.image(305,205,'carte_verte').setOrigin(0,0).setDepth(4);
                nbcarteverte+=1;
                emplacement7="vert";
                emplacementcomplet+=1
            }
            else if (rdmcarte == 6 && nbcarteviolette < 2) {
                this.physics.add.image(305,205,'carte_violette').setOrigin(0,0).setDepth(4);
                nbcarteviolette+=1;
                emplacement7="violet";
                emplacementcomplet+=1
            }
        }
        

        // emplacement 8
        while (emplacementcomplet == 7) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(455,205,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement8="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(455,205,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement8="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(455,205,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement8="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(455,205,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement8="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(455,205,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement8="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(455,205,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement8="violet";
            emplacementcomplet+=1
        }
        }
        

        // emplacement 9
        while (emplacementcomplet == 8) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(5,405,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement9="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(5,405,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement9="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(5,405,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement9="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(5,405,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement9="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(5,405,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement9="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(5,405,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement9="violet";
            emplacementcomplet+=1
        }
        }
        

        // emplacement 10
        while (emplacementcomplet == 9) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(155,405,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement10="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(155,405,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement10="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(155,405,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement10="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(155,405,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement10="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(155,405,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement10="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(155,405,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement10="violet";
            emplacementcomplet+=1
        }
        }
        

        // emplacement 11
        while (emplacementcomplet == 10) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(305,405,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement11="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(305,405,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement11="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(305,405,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement11="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(305,405,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement11="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(305,405,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement11="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(305,405,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement11="violet";
            emplacementcomplet+=1
        }
        }
        

        // emplacement 12
        while (emplacementcomplet == 11) {
            rdmcarte = Phaser.Math.Between(1,6);
        if (rdmcarte == 1 && nbcartebleue < 2) {
            this.physics.add.image(455,405,'carte_bleue').setOrigin(0,0).setDepth(4);
            nbcartebleue+=1;
                emplacement12="bleu";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 2 && nbcartejaune < 2) {
            this.physics.add.image(455,405,'carte_jaune').setOrigin(0,0).setDepth(4);
            nbcartejaune+=1;
                emplacement12="jaune";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 3 && nbcarteorange < 2) {
            this.physics.add.image(455,405,'carte_orange').setOrigin(0,0).setDepth(4);
            nbcarteorange+=1;
                emplacement12="orange";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 4 && nbcarterouge < 2) {
            this.physics.add.image(455,405,'carte_rouge').setOrigin(0,0).setDepth(4);
            nbcarterouge+=1;
                emplacement12="rouge";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 5 && nbcarteverte < 2) {
            this.physics.add.image(455,405,'carte_verte').setOrigin(0,0).setDepth(4);
            nbcarteverte+=1;
                emplacement12="vert";
            emplacementcomplet+=1
        }
        else if (rdmcarte == 6 && nbcarteviolette < 2) {
            this.physics.add.image(455,405,'carte_violette').setOrigin(0,0).setDepth(4);
            nbcarteviolette+=1;
                emplacement12="violet";
            emplacementcomplet+=1
        }
        }
        
    }
    

    








    
}


function update(){
    
}

function onClickCarte1(pointer,gameObject){
    
    carte_grise1.setVisible(false);
    emplacement1retourne=1;
    nbcarteretournee+=1;
    if (nbcarteretournee == 2) {

    }
}

function onClickCarte2(pointer,gameObject){
    carte_grise2.setVisible(false);
    emplacement2retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte3(pointer,gameObject){
    carte_grise3.setVisible(false);
    emplacement3retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte4(pointer,gameObject){
    carte_grise4.setVisible(false);
    emplacement4retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte5(pointer,gameObject){
    carte_grise5.setVisible(false);
    emplacement5retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte6(pointer,gameObject){
    carte_grise6.setVisible(false);
    emplacement6retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte7(pointer,gameObject){
    carte_grise7.setVisible(false);
    emplacement7retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte8(pointer,gameObject){
    carte_grise8.setVisible(false);
    emplacement8retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte9(pointer,gameObject){
    carte_grise9.setVisible(false);
    emplacement9retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte10(pointer,gameObject){
    carte_grise10.setVisible(false);
    emplacement10retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte11(pointer,gameObject){
    carte_grise11.setVisible(false);
    emplacement11retourne=1;
    nbcarteretournee+=1;
}

function onClickCarte12(pointer,gameObject){
    carte_grise12.setVisible(false);
    emplacement12retourne=1;
    nbcarteretournee+=1;
}


function verifPaire(){
    if (emplacement1retourne == "bleu" || emplacement1retourne == "jaune" || emplacement1retourne == "orange" || emplacement1retourne == "rouge" || emplacement1retourne == "vert" || emplacement1retourne == "violet") {
        
    }
}