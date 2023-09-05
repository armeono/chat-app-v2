use dotenv::dotenv;
use std::{env, net::SocketAddr, str::FromStr};
mod config;
mod controllers;
mod routes;

#[tokio::main]
async fn main() {
    dotenv().ok();

    let host = env::var("HOST").unwrap();

    let routes = routes::create_routes();

    let addr = SocketAddr::from_str(&host).unwrap();

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();
}
