use axum::{
    routing::{get, post},
    Router,
};

use crate::config::cors::cors;
use crate::controllers::users::create_user;
use crate::controllers::websocket::ws_handler;

pub fn create_routes() -> Router {
    let cors_value = cors();

    Router::new()
        .route("/api/user", post(create_user))
        .route("/api/ws", get(ws_handler))
        .layer(cors_value)
}
