import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1794834810089 implements MigrationInterface {
    name = 'Init1794834810089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Roles" ("id" SERIAL NOT NULL, "role_name" character varying NOT NULL, CONSTRAINT "PK_efba48c6a0c7a9b6260f771b165" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "profileId" integer, CONSTRAINT "REL_caac395c9a0a9dcdf61d7905c4" UNIQUE ("profileId"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users Profile" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" character varying NOT NULL, CONSTRAINT "PK_cc84fbbb5425055518ad0f62feb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text, "price" numeric(10,2) NOT NULL, "stock" integer NOT NULL DEFAULT '0', "categoryId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4c9fb58de893725258746385e1" ON "products" ("name") `);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE ("name"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_role_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_1f04b61cd5cb1c8b309f43097ca" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b66c5553c3b3cd00f8ac7b42f2" ON "users_role_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9aace0c8482d91498bcfa8731b" ON "users_role_roles" ("rolesId") `);
        await queryRunner.query(`CREATE TABLE "products_tags_tags" ("productsId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_b06c7e3d7d74a176b4d936bcd73" PRIMARY KEY ("productsId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_88687975db5205fdbdb10969fc" ON "products_tags_tags" ("productsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_72fa6ba0f176a89a2e9d90274c" ON "products_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_caac395c9a0a9dcdf61d7905c41" FOREIGN KEY ("profileId") REFERENCES "Users Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_role_roles" ADD CONSTRAINT "FK_b66c5553c3b3cd00f8ac7b42f21" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_role_roles" ADD CONSTRAINT "FK_9aace0c8482d91498bcfa8731b0" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_tags_tags" ADD CONSTRAINT "FK_88687975db5205fdbdb10969fc4" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_tags_tags" ADD CONSTRAINT "FK_72fa6ba0f176a89a2e9d90274c5" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_tags_tags" DROP CONSTRAINT "FK_72fa6ba0f176a89a2e9d90274c5"`);
        await queryRunner.query(`ALTER TABLE "products_tags_tags" DROP CONSTRAINT "FK_88687975db5205fdbdb10969fc4"`);
        await queryRunner.query(`ALTER TABLE "users_role_roles" DROP CONSTRAINT "FK_9aace0c8482d91498bcfa8731b0"`);
        await queryRunner.query(`ALTER TABLE "users_role_roles" DROP CONSTRAINT "FK_b66c5553c3b3cd00f8ac7b42f21"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_caac395c9a0a9dcdf61d7905c41"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_72fa6ba0f176a89a2e9d90274c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88687975db5205fdbdb10969fc"`);
        await queryRunner.query(`DROP TABLE "products_tags_tags"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9aace0c8482d91498bcfa8731b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b66c5553c3b3cd00f8ac7b42f2"`);
        await queryRunner.query(`DROP TABLE "users_role_roles"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4c9fb58de893725258746385e1"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "Users Profile"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Roles"`);
    }

}
