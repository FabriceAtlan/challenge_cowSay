import 'dotenv/config';
import cowsay from 'cowsay';

const { NAME, CAMPUS } = process.env;

console.log(cowsay.say(
	{
		text: `Hello I'm ${NAME} from ${CAMPUS}`,
		e: "O-",
		T: "U ",
	}
))