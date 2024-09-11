# Practice: Foreign Keys in Sequelize Migrations

## Step 1: One-to-Many
- Musicians table in your database that tracks the first and last names of musicians
- You would like to be able to associate each musician with a Band

### Generate a new migration named add-bandId-to-musicians
- This generates a migration file for us so that we can a foreign key column to the musicians table
- This is done in case you don't want to undo the migration
- Note: you could just add the columns to the migration file and then un-migrate than remigrate


`npx sequelize-cli migration:generate --name add-bandId-to-musicians`

### This will allow us to add a column to the Musician to associate it with a band

- A Band can have `many` musicians
- The `many` side(musician) will hold the foreign key to the `one` side(band)
- Musician table will reference the bands through the bandId foreign key
### On delete cascade
- will make it so when a band is deleted, the musician will be deleted as well

### Migration file to add column
```js
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Musicians", "bandId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "Bands" },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Musicians", "bandId");
  },
};
```

### We must also updated the musician model
- A musician `belongs` to a band - many side of the one to many
- references `bands` through the foreign key `bandId`

### Musician Model
```js
static associate(models) {
      // Your code here
      Musician.belongsTo(models.Band, {
        foreignKey: "bandId",
      });

      // ! Later phase
      // Musician.belongsToMany(models.Instrument, {
      //   through: models.MusicianInstrument,
      //   foreignKey: "musicianId",
      //   otherKey: "instrumentId",
      // });
}
```


### Must update the band model as well
- A band has `many` musicians - one side of the one to many
- A band is referenced to the musician through the foreign key on the musicians table
- The foreign key on the musician table points at the primary key on the band table

### Band Model
```js
 static associate(models) {
      // Your code here
      Band.hasMany(models.Musician, {
        foreignKey: "bandId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
```


## Make sure to migrate
`npx dotenv sequelize-cli db:migrate`;

## Run test
`node demo/01-one-to-many.js`

### Band has many musicians - ONE TO MANY
### Musician belongs to a band - MANY TO ONE

## Step 2: Many-to-Many

- A musician can play many instruments
- A instrument can be played my many musicians

### Generate a migration and a model for a MusicianInstrument
- This is generating a migration to create the join table MusicianInstrument
- This join table allows us to associate musicians with instruments

`npx sequelize-cli model:generate --name MusicianInstrument --attributes  musicianId:integer,instrumentId:integer`

### Update migrations for musician instruments
- add the references to the foreign keys

```js
musicianId: {
        type: Sequelize.INTEGER,
        references: { model: "Musicians" },
        onDelete: "CASCADE",
      },
      instrumentId: {
        type: Sequelize.INTEGER,
        references: { model: "Instruments" },
        onDelete: "CASCADE",
      },
```

### No need to update model for MusicianInstrument
```js
 MusicianInstrument.init({
    musicianId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER
  })
```


### Update model for musicians
- Many to many relationships uses the belongsToMany method
- Add belongsToMany
- Musician belongs to an instrument
- through the musician instrument joins table
- through the musicianId foreign key
- and the instrumentId foreign key
-
```js
 Musician.belongsToMany(models.Instrument, {
        through: models.MusicianInstrument,
        foreignKey: "musicianId",
        otherKey: "instrumentId",
      });
```

### Update model for instruments
- Many to many relationships uses the belongsToMany method
- Add belongsToMany
- instruments belongs to an musician
- through the musician instrument joins table
- through the instrumentId foreign key
- and the musicianId foreign key
```js
 Instrument.belongsToMany(models.Musician, {
        through: models.MusicianInstrument,
        foreignKey: "instrumentId",
        otherKey: "musicianId",
      });
```

### Run migration
`npx dotenv sequelize-cli db:migrate`


### Run test
`npm test test/02-many-to-many-spec.js`
