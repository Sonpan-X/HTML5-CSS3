class Cannon extends Spirit {
    constructor(type) {
        if (type > 7 || type < 1) {
            throw new Error('炮的类型不对，只能是1~5之间');
        }
        const data = __g_resource['cannon'][`cannon${type}`];
        super({
            img: data.img,
            sx: data.frame.x, 
            sy: data.frame.y,
            w: data.frame.w,
            h: data.frame.h,
        });
        this.type = type;

        this.max_tick = 5;
        this.max_frame = 4;
    }
   
    setType(newType){
        if (newType > 7 || newType < 1) {
            throw new Error('炮的类型不对，只能是1~5之间');
        }

        let data = __g_resource['cannon'][`cannon${newType}`];
        this.img = data.img;
        this.sx = data.frame.x;
        this.sy = data.frame.y;
        this.w = data.frame.w;
        this.h = data.frame.h;

        this.type = newType;
    }
} 