import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602780638208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // realizar alterações
        // criar tabela
        await queryRunner.createTable(new Table ({
            name: 'orphanages',
            columns: [
                {
                    name:'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2   
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // desfazer as altearções
        await queryRunner.dropTable('orphanages')
    }

}