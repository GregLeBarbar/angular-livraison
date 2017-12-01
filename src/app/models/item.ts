export class Item {

    private reference: string; 
    private name: string;
    public state: number;
    public animateState: string;

    constructor(data: any) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        this.animateState = 'created';
    }

    toogleAnimateState() {
        this.animateState = this.animateState === 'created' ? 'active' : 'created';
        console.log(this.animateState);
    }
}