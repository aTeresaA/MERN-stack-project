//	1xx Informerande

//	2xx Lyckad förfrågan
const OK = 200
const CREATED = 201

//	3xx Vidarekoppling

//	4xx Klientfel
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404

//	5xx Serverfel
const INTERNAL_SERVER_ERROR = 500

export default {
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR
}