import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

//* GET Client
export async function GET(request, { params }) {
  const clientId = (await params).id;

  const clients = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const client = clients.find((client) => client.id == clientId);

  return Response.json(
    { client },
    {
      status: 200,
    }
  );
}

//* PUT Client
export async function PUT(request, { params }) {
  const clientId = (await params).id;

  const clients = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const client = clients.find((client) => client.id == clientId);
  if (!client) {
    return Response.json(
      { message: "Client not found" },
      {
        status: 404,
      }
    );
  }

  const body = await request.json();
  const newClient = { ...client, ...body };

  const newClients = clients.map((client) => {
    if (client.id == clientId) return newClient;
    return client;
  });

  fs.writeFileSync(dbPath, JSON.stringify(newClients), "utf-8");

  return Response.json(
    { message: "Client updated", client: newClient },
    {
      status: 200,
    }
  );
}

//* DELETE Client
export async function DELETE(request, { params }) {
  const clientId = (await params).id;

  const clients = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const deletedClient = clients.find((client) => client.id == clientId);
  if (!deletedClient) {
    return Response.json(
      { message: "Client not found" },
      {
        status: 404,
      }
    );
  }

  const newClients = clients.filter((client) => client.id != clientId);
  fs.writeFileSync(dbPath, JSON.stringify(newClients), "utf-8");

  return Response.json(
    { message: "Client deleted", client: deletedClient },
    {
      status: 200,
    }
  );
}
