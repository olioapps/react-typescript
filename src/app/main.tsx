import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/app";

import {
  makeTypedFactory,
  recordify,
  TypedRecord,
} from "typed-immutable-record";

// create some TypeScript interfaces
interface IPet {
  name: string;
  type: string;
}

interface IPerson {
  name: string;
  pet?: IPet;
}

// create some typed immutable records w/ "TypedRecord"
interface IPetRecord extends TypedRecord<IPetRecord>, IPet {}
interface IPersonRecord extends TypedRecord<IPersonRecord>, IPerson {}

// create a factory with property defaults w/ "makeTypedFactory"
const LukeRecordFactory = makeTypedFactory<IPerson, IPersonRecord>({
  name: "Luke",
});

// create some instances, overriding the defaults
const master = LukeRecordFactory({
  name: "Master Luke",
});

// create an pet instance child record w/ "recordify", without prior defaults/factory
const skywalkerRecord = recordify<IPerson, IPersonRecord>({
  name: "Luke Skywalker",
  pet: recordify<IPet, IPetRecord>({
    name: "Artoo",
    type: "Droid",
  }),
});

// property autocompletion works, set() works, etc...
const updatedSkywalker = skywalkerRecord.set("name", "Duke Piewalker");

ReactDOM.render(
  <App message={`${master.name} - ${updatedSkywalker.pet && updatedSkywalker.pet.name}`} />,
  document.getElementById("root"),
);
