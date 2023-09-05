use axum::http::Method;
use tower_http::cors::{Any, CorsLayer};

pub fn cors() -> CorsLayer {
    let cors = CorsLayer::new()
        .allow_methods([Method::GET, Method::POST])
        .allow_origin(Any);

    cors
}
