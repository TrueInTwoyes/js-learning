
function movingLadder() {
    let ladder = {

        step: 0,

        up() {
            this.step++;
            return this;
        },

        down() {
            this.step--;
            return this;
        },

        showStep: function() {
            return this;
        }
    };
    
    ladder.up().down().down().up().up().up().showStep();
    alert("Starting step in ladder = 0\n" + "Up - Down - Down - Up - Up - Up \nStep = " + ladder.step);
}