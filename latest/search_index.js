var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#LibPQ-1",
    "page": "Home",
    "title": "LibPQ",
    "category": "section",
    "text": "(Image: Stable) (Image: Latest) (Image: Build Status) (Image: CodeCov)"
},

{
    "location": "pages/api.html#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "pages/api.html#LibPQ.Connection",
    "page": "API",
    "title": "LibPQ.Connection",
    "category": "Type",
    "text": "type Connection\n\nA connection to a PostgreSQL database.\n\nFields:\n\nconn\nA pointer to a libpq PGconn object (C_NULL if closed)\nclosed\nTrue if the connection is closed and the PGconn object has been cleaned up\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.Connection-Tuple{AbstractString}",
    "page": "API",
    "title": "LibPQ.Connection",
    "category": "Method",
    "text": "Connection(str::AbstractString; throw_error=true) -> Connection\n\nCreate a Connection from a connection string as specified in the PostgreSQL documentation (33.1.1. Connection Strings). If throw_error is true, an error will be thrown if the resulting connection's status is CONNECTION_BAD and the PGconn object will be cleaned up. Otherwise, a warning will be shown and the user should call close or reset! on the returned Connection.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.clear-Tuple{LibPQ.Result}",
    "page": "API",
    "title": "LibPQ.clear",
    "category": "Method",
    "text": "clear(jl_result::Result)\n\nClean up the memory used by the PGresult object. The Result will no longer be usable.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.execute-Tuple{LibPQ.Connection,AbstractString}",
    "page": "API",
    "title": "LibPQ.execute",
    "category": "Method",
    "text": "execute(jl_conn::Connection, query::AbstractString; throw_error=false) -> Result\n\nRun a query on the PostgreSQL database and return a Result. If throw_error is true, throw an error and clear the result if the query results in a fatal error or unreadable response.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.status-Tuple{LibPQ.Connection}",
    "page": "API",
    "title": "LibPQ.status",
    "category": "Method",
    "text": "status(jl_conn::Connection) -> libpq_c.ConnStatusType\n\nReturn the status of the PostgreSQL database connection according to libpq. Only CONNECTION_OK and CONNECTION_BAD are valid for blocking connections, and only blocking connections are supported right now.\n\nSee also: error_message\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.status-Tuple{LibPQ.Result}",
    "page": "API",
    "title": "LibPQ.status",
    "category": "Method",
    "text": "status(jl_result::Result) -> libpq_c.ExecStatusType\n\nReturn the status of a result's corresponding database query according to libpq. Only CONNECTION_OK and CONNECTION_BAD are valid for blocking connections, and only blocking connections are supported right now.\n\nSee also: error_message\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.ConnectionOption",
    "page": "API",
    "title": "LibPQ.ConnectionOption",
    "category": "Type",
    "text": "struct ConnectionOption\n\nA Julia representation of a PostgreSQL connection option (PQconninfoOption).\n\nFields:\n\nkeyword\nThe name of the option\nenvvar\nThe name of the fallback environment variable for this option\ncompiled\nThe PostgreSQL compiled-in default for this option\nval\nThe value of the option if set\nlabel\nThe label of the option for display\ndisptype\nIndicator for how to display the option (see ConninfoDisplay)\ndispsize\nThe size of field to provide for entry of the option value (not used here)\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.ConnectionOption-Tuple{LibPQ.libpq_c.PQconninfoOption}",
    "page": "API",
    "title": "LibPQ.ConnectionOption",
    "category": "Method",
    "text": "ConnectionOption(pq_opt::libpq_c.PQconninfoOption) -> ConnectionOption\n\nConstruct a ConnectionOption from a libpg_c.PQconninfoOption.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.ConninfoDisplay",
    "page": "API",
    "title": "LibPQ.ConninfoDisplay",
    "category": "Type",
    "text": "Indicator for how to display a PostgreSQL connection option (PQconninfoOption).\n\nPossible values are:\n\nNormal (libpq: \"\"): display as is\nPassword (libpq: \"*\"): hide the value of this field\nDebug (libpq: \"D\"): don't show by default\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.Result",
    "page": "API",
    "title": "LibPQ.Result",
    "category": "Type",
    "text": "type Result <: DataStreams.Data.Source\n\nA result from a PostgreSQL database query\n\nFields:\n\nresult\nA pointer to a libpq PGresult object (C_NULL if cleared)\ncleared\nTrue if the PGresult object has been cleaned up\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.Result-Tuple{Ptr{Void}}",
    "page": "API",
    "title": "LibPQ.Result",
    "category": "Method",
    "text": "Result(result::Ptr{libpq_c.PGresult}) -> Result\n\nConstruct a Result from a libpg_c.PGresult\n\n\n\n"
},

{
    "location": "pages/api.html#Base.close-Tuple{LibPQ.Connection}",
    "page": "API",
    "title": "Base.close",
    "category": "Method",
    "text": "close(jl_conn::Connection)\n\nClose the PostgreSQL database connection and free the memory used by the PGconn object. This function calls PQfinish, but only if jl_conn.closed is false, to avoid a double-free.\n\n\n\n"
},

{
    "location": "pages/api.html#Base.parse-Tuple{Type{LibPQ.ConninfoDisplay},AbstractString}",
    "page": "API",
    "title": "Base.parse",
    "category": "Method",
    "text": "parse(::Type{ConninfoDisplay}, str::AbstractString) -> ConninfoDisplay\n\nParse a ConninfoDisplay from a string. See ConninfoDisplay.\n\n\n\n"
},

{
    "location": "pages/api.html#Base.show-Tuple{IO,LibPQ.Connection}",
    "page": "API",
    "title": "Base.show",
    "category": "Method",
    "text": "show(io::IO, jl_conn::Connection)\n\nDisplay a Connection by showing the connection status and each connection option.\n\n\n\n"
},

{
    "location": "pages/api.html#Base.show-Tuple{IO,LibPQ.Result}",
    "page": "API",
    "title": "Base.show",
    "category": "Method",
    "text": "show(io::IO, jl_result::Result)\n\nShow a PostgreSQL result and whether it has been cleared.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.column_name-Tuple{LibPQ.Result,Integer}",
    "page": "API",
    "title": "LibPQ.column_name",
    "category": "Method",
    "text": "column_name(jl_result::Result, column_number::Integer) -> String\n\nReturn the name of the column at index column_number (1-based).\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.column_names-Tuple{LibPQ.Result}",
    "page": "API",
    "title": "LibPQ.column_names",
    "category": "Method",
    "text": "column_names(jl_result::Result, column_number::Integer) -> Vector{String}\n\nReturn the names of all the columns in the query result.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.column_number-Tuple{LibPQ.Result,AbstractString}",
    "page": "API",
    "title": "LibPQ.column_number",
    "category": "Method",
    "text": "column_number(jl_result::Result, column_name::AbstractString) -> Int\n\nReturn the index (1-based) of the column named column_name.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.conninfo-Tuple{LibPQ.Connection}",
    "page": "API",
    "title": "LibPQ.conninfo",
    "category": "Method",
    "text": "conninfo(jl_conn::Connection) -> Vector{ConnectionOption}\n\nGet all connection options for a connection.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.error_message-Tuple{LibPQ.Connection}",
    "page": "API",
    "title": "LibPQ.error_message",
    "category": "Method",
    "text": "error_message(jl_conn::Connection) -> String\n\nReturn the error message most recently generated by an operation on the connection. Includes a trailing newline.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.error_message-Tuple{LibPQ.Result}",
    "page": "API",
    "title": "LibPQ.error_message",
    "category": "Method",
    "text": "error_message(jl_result::Result) -> String\n\nReturn the error message associated with the result, or an empty string if there was no error. Includes a trailing newline.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.num_columns-Tuple{LibPQ.Result}",
    "page": "API",
    "title": "LibPQ.num_columns",
    "category": "Method",
    "text": "num_columns(jl_result::Result) -> Int\n\nReturn the number of columns in the query result. This will be 0 if the query would never return data.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.num_rows-Tuple{LibPQ.Result}",
    "page": "API",
    "title": "LibPQ.num_rows",
    "category": "Method",
    "text": "num_rows(jl_result::Result) -> Int\n\nReturn the number of rows in the query result. This will be 0 if the query would never return data.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.reset!-Tuple{LibPQ.Connection}",
    "page": "API",
    "title": "LibPQ.reset!",
    "category": "Method",
    "text": "reset!(jl_conn::Connection; throw_error=true)\n\nReset the communication to the PostgreSQL server. The PGconn object will be recreated using identical connection parameters. The throw_error parameter functions as in Connection.\n\nnote: Note\nThis function can be called on a connection with status CONNECTION_BAD, for example, but cannot be called on a connection that has been closed.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ.unsafe_nullable_string-Tuple{Cstring}",
    "page": "API",
    "title": "LibPQ.unsafe_nullable_string",
    "category": "Method",
    "text": "unsafe_nullable_string(ptr::Cstring) -> Nullable{String}\n\nConvert a Cstring to a Nullable{String}, returning Nullable{String}() if the pointer is C_NULL.\n\n\n\n"
},

{
    "location": "pages/api.html#LibPQ-API-1",
    "page": "API",
    "title": "LibPQ API",
    "category": "section",
    "text": "Modules = [LibPQ]\nPages = [\"LibPQ.jl\", \"utils.jl\", \"datastreams.jl\"]"
},

]}
