export default {
    displayActivityTypes(){
        const maxItems = Math.min(this.mostActivityTypes.length, 3);
        return this.mostActivityTypes.slice(0, maxItems);
    }
}