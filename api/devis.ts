import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée",
    });
  }

  try {
    const { name, email, phone, projectType, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        error: "Informations manquantes",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "RS BAT <onboarding@resend.dev>",

      // Adresse qui reçoit les devis
      to: ["rsbatfrance@gmail.com"],

      // Quand tu cliques sur Répondre → réponse au client
      replyTo: email,

      subject: `Nouvelle demande de devis - ${name}`,

      html: `
        <h2>Nouvelle demande de devis RS BAT</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Type de travaux :</strong> ${projectType || "Non renseigné"}</p>

        <hr>

        <h3>Description du projet</h3>
        <p>${message || "Aucune description"}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return res.status(400).json({
        error: "Erreur lors de l'envoi du mail",
        details: error,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("Erreur serveur :", error);

    return res.status(500).json({
      error: "Erreur serveur",
    });
  }
}
