import {Column, Entity} from "typeorm"

@Entity()
export class Record {
    @Column()
    id: number

    @Column()
    datetime: number

    @Column()
    deviceId: number


}
