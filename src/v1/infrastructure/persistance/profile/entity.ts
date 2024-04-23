import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    type: "varchar",
    nullable: false,
  })
  username!: string

  @Column({ length: 50 })
  email!: string

  @Column({ length: 256 })
  description!: string

  @Column({ length: 256 })
  picture!: string

  @Column({ length: 256 })
  follow!: string
}
