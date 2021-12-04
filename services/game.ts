import api from './api';
import Game from '../DTOs/game';

interface GamesIndexResponse {
  games: Game[];
};

const GameService = {
  index: (url: string) => {
    return api.get<GamesIndexResponse>(url)
      .then(resp => resp.data);
  }
};

export default GameService;


