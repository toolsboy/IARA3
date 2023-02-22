AFRAME.registerComponent('soundhandler', {
    init: function () {
        this.soundEl = document.querySelector('[sound]');
        this.soundEl2 = document.getElementById('sound22');
        this.soundEl3 = document.getElementById('sound33');
        this.soundEl4 = document.getElementById('sound44');
        this.marker = document.getElementById('trumpet1');
        this.marker2 = document.getElementById('saxophone2');
        this.marker3 = document.getElementById('violin3');
        this.marker4 = document.getElementById('piano4');
        this.visible = false;
        this.visible2 = false;
        this.visible3 = false;
        this.visible4 = false;
    },
    tick: function () {

        console.log("Notding")
        if (this.soundEl != null && this.marker.object3D.visible && !this.visible) {
            console.log("ding")
            this.soundEl.components.sound.stopSound(); // stop if playing
            this.soundEl.components.sound.playSound(); // play
            this.visible = true; // make sure it plays only once per visible
        } else if (!this.marker.object3D.visible) {
            this.visible = false;
        }

        if (this.soundEl2 != null && this.marker2.object3D.visible && !this.visible2) {
            console.log("ding2")
            this.soundEl2.components.sound.stopSound(); // stop if playing
            this.soundEl2.components.sound.playSound(); // play
            this.visible2 = true; // make sure it plays only once per visible
        } else if (!this.marker2.object3D.visible) {
            this.visible2 = false;
        }

        if (this.soundEl3 != null && this.marker3.object3D.visible && !this.visible3) {
            console.log("ding3")
            this.soundEl3.components.sound.stopSound(); // stop if playing
            this.soundEl3.components.sound.playSound(); // play
            this.visible3 = true; // make sure it plays only once per visible
        } else if (!this.marker3.object3D.visible) {
            this.visible3 = false;
        }

        if (this.soundEl4 != null && this.marker4.object3D.visible && !this.visible4) {
            console.log("ding4")
            this.soundEl4.components.sound.stopSound(); // stop if playing
            this.soundEl4.components.sound.playSound(); // play
            this.visible4 = true; // make sure it plays only once per visible
        } else if (!this.marker4.object3D.visible) {
            this.visible4 = false;
        }
    }
});
