import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

//* GET Clients
export async function GET(request) {
  const clients = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  return Response.json(
    { clients },
    {
      headers: {
        "Set-Cookie": "token=123",
      },
      status: 200,
    }
  );
}

//* POST Client
export async function POST(request) {
  const clients = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const body = await request.json();

  const maxId = clients.reduce((max, client) => Math.max(max, client.id), 0);

  const newClient = { ...body, id: maxId + 1 };

  clients.push(newClient);
  fs.writeFileSync(dbPath, JSON.stringify(clients), "utf-8");

  return Response.json(
    { message: "Client created", client: newClient },
    {
      status: 201,
    }
  );
}
