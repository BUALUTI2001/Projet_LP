const nodemailer =require('nodemailer');
const { Compte, Administrateur, Etudiant, Role } = require('../Modeles/Modeles');
const { where, Op } = require('sequelize');
const bcrypt =require('bcryptjs')

// Configuration du transporter Nodemailer

exports.ConfigurationNodemailer=async(req,res)=>{
    
//Administrateur: UserName || AdresseMail || password || telephone || password_Mail|| avatar
    //const {id_Admin}=req.params //recuperation de l'id de l'admin
    const Compte_Admin = await Compte.findOne({where:{id:'1'}})
    const id_role =await Role.findOne({ where: {designation: {[Op.like]: `%ADMIN%`}}})
    if(!Compte_Admin){
        console.log(`Impossible d'envoyer le Mail on ne trouve pas votre Compte dans la database`)
    }
    if(Compte_Admin){
        //seul l'admin peut envoyer le mail
        if(id_role===Compte_Admin.id_role){
            const {MailPassWord} =req.body// l'admin doit mettre son mot de pass pour envoiyer le Mail
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: Admin.AdresseMail,
                  pass: MailPassWord
                }
              });
              // Créer la variable adminEmail avant de la retourner
              const adminEmail = Compte_Admin.AdresseMail;
              console.log(`Coonfiguration reussie!`)
              return { transporter, adminEmail };
        }
        
        
    }
    else{
        
        console.log(`Votre compte n'est pas reconnu comme Administrateur`);
        return { transporter: null, adminEmail: null };
    }
    
}

exports.sendEmailToOneStudent = async (req, res) => {
    try {
 
      const {transporter,adminEmail}=this.ConfigurationNodemailer()
      if(!transporter ||!adminEmail){
        console.log('Erreur de configuration du transporter de nodemailer')
      }
    const {id_etudiant}=req.params //recuperation de l'id
    /**
     * possible source d'erreur avec  const {id_etudiant}=req.params de l'administrateur
     */
    const etudiant =await Compte.findOne({where:{id:id_etudiant}})
      if(!etudiant){
        console.log(`L'etudiant selectionné est introuvable!`)
      }
      if(etudiant){

        const { objet, message} = req.body; // Récupération des informations de l'email
        await transporter.sendMail({
            from: adminEmail,
            to: etudiant.AdresseMail,
            subject: objet,
            text: message
          });
      
          // Enregistrer l'email dans la base de données
          await Mail.create({
            destinataire:etudiant.AdresseMail,
            objet:objet,
            message:message,
            id_compte:etudiant.id
        });
      
          res.status(200).json({ message: 'Email envoyé avec succès.' });
      }
      
    } catch (error) {
      console.error(`Erreur lors de l\'envoi de l\'email || ${error}`);
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
    }
  };

exports.sendMailToAllStudent = async (req, res) =>{
    try {
    const Compte_Admin = await Compte.findOne({where:{id:'1'}})
    console.log(`Compte_Admin: UserName:${Compte_Admin.UserNeme} || AdressMail:${Compte_Admin.AdresseMail}`)
    const id_role =await Role.findOne({ where: {designation: {[Op.like]: `%ADMIN%`}}})
      console.log(`id_role:${id_role.id}`)
    if(!Compte_Admin){
        console.log(`Impossible d'envoyer le Mail on ne trouve pas votre Compte dans la database`)
    }
    if(Compte_Admin){
      //seul l'admin peut envoyer le mail
      if(id_role.id===Compte_Admin.id_role){
          const {MailPassWord} =req.body// l'admin doit mettre son mot de pass pour envoiyer le Mail
         console.log(`MailPassWord:${MailPassWord}`)

          const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: Compte_Admin.AdresseMail,
                pass: MailPassWord
              }
            });
            console.log(`transporter:${transporter.service}`)
            // Créer la variable adminEmail avant de la retourner
            const adminEmail = Compte_Admin.AdresseMail;
            console.log(`adminEmail:${adminEmail}`)
            console.log(`Coonfiguration reussie!`)
            
            const allStudent =await Compte.findAll()

            for(const etudiant of allStudent){
                
                if(etudiant){
        
                    const { objet, message} = req.body; // Récupération des informations de l'email
                    console.log(`ID:${etudiant.id}||Mail etudiant:${etudiant.AdresseMail}`)
                    await transporter.sendMail({
                        from: adminEmail,
                        to: etudiant.AdresseMail,
                        subject: objet,
                        text: message
                      });
                  
                      // Enregistrer l'email dans la base de données
                      await Mail.create({
                        destinataire:etudiant.AdresseMail,
                        objet:objet,
                        message:message,
                        id_compte:etudiant.id
                    });
                  
                      res.status(200).json({ message: 'Email envoyé avec succès.' });
                  }
            }
      }
      
      
  }
      /*
        // Configurer le transporter Nodemailer
    const { transporter, adminEmail } = await this.ConfigurationNodemailer(req, res);

    if (!transporter || !adminEmail) {
      return res.status(500).json({ error: 'Erreur lors de la configuration du transporter Nodemailer.' });
    }
      */
 
    } catch (error) {
        console.log(`Erreur lors de l'envoie ||${error}`)
    }

}
