"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const HotelsRoutes_1 = __importDefault(require("./routes/HotelsRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        const MONGO_HOST = "mongodb+srv://mongouser:af8zdKFhtaZ3kv2E@mongocloud-pajg1.mongodb.net/test?retryWrites=true";
        mongoose_1.default.set('useFindAndModify', true);
        mongoose_1.default.connect(process.env.MONGO_HOST || MONGO_HOST, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(db => console.log('Base de datos conectada :)'));
        //configuración del puerto
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); //permitir peticiones desde formularios
        this.app.use(compression_1.default()); //reducir el peso de la respuesta
        this.app.use(cors_1.default()); //permitir conexiones desde fuera
    }
    routes() {
        this.app.use(IndexRoutes_1.default);
        this.app.use('/api', HotelsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor on:', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
