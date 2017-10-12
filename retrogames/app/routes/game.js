import Game from '../models/game';

const getGames = (req, res) => {
	Game.find(null, null, {sort: {postDate: 1}},(err, games)=>{
		if(err){
			res.send(err);
		}
		res.json(games);
	
	});
	console.log("request getGames");
}

const getGame = (req, res) => {
	const { id } = req.params;

	Game.findById(id, (err, game)=>{
		if(err){
			res.send(err);
		}
		res.json(game);
	});
	console.log("request getGame/:id");
}

const postGame = (req, res) => {
	console.log(typeof(req.body));
	console.log(req.body);

	let game = Object.assign(new Game(), req.body);
	game.save(err => {
		if(err){
			res.send(err);
		}
		res.json({message: 'game created'});
	});
	console.log("request postGame/:id");
}

const deleteGame = (req, res) => {
	Game.remove(
			{_id: req.params.id},
			err => {
				if(err){
					res.send(err);
				}
				res.json({message: 'successfully deleted'})
			}
		);
	console.log("request deleteGame/:id");
};

export {getGames, getGame, postGame, deleteGame};