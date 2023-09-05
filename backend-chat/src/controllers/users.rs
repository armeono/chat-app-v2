use axum::extract::{rejection::JsonRejection, Json};
use axum::response::IntoResponse;

use serde::{Deserialize, Serialize};
use serde_json::{from_str, Value};

#[derive(Serialize, Deserialize, Debug)]
pub struct User {
    name: String,
    age: u8,
}

pub async fn create_user(
    payload: Result<Json<User>, JsonRejection>,
) -> impl IntoResponse {
    let payload = payload;

    match payload {
        Ok(payload) => payload.name.clone(),
        Err(err) => err.body_text(),
    }
}
