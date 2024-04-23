import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ length: 50 })
  title!: string

  @Column({ length: 500 })
  description!: string

  @Column({ length: 256 })
  mediaURL!: string
}
