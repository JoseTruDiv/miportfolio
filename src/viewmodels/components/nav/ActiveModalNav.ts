import { ref, type Ref } from "vue";

class ActiveModalNav{

    public palanca: Ref<Number> = ref(0);

    constructor(){}

    onPalanca(){
        this.palanca.value = 1;
    }

    offPalaca(){
        this.palanca.value = 0;
    }

}

const activeModalNav = new ActiveModalNav();

export default activeModalNav;