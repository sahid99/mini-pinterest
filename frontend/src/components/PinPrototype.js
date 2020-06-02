class PinPrototype {
    constructor(proto){
        this.proto = proto
    }
    clone(){
        const pin = {};
        pin.api_ID = this.proto.api_ID;
        pin.width = this.proto.width;
        pin.height = this.proto.height;
        pin.url = this.proto.url;

        return pin;
    }
}

export default PinPrototype;