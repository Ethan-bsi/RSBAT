import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom est requis" }),
  phone: z.string().min(10, { message: "Numéro invalide" }),
  email: z.string().email({ message: "Email invalide" }),
  service: z.string().min(1, { message: "Sélectionnez un type" }),
  description: z.string().min(10, { message: "Décrivez votre projet" }),
});

const servicesList = [
  "Construction", "Rénovation", "Climatisation", "Pose de PAC/BT",
  "Isolation", "ITE", "Menuiserie extérieure", "Étanchéité",
  "Plâtrerie", "Carrelage", "Extension de maison", "Pose de cuisine",
  "Peinture", "Sol souple"
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  return (
    <section id="devis" className="bg-background border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        
        {/* Left Panel */}
        <div className="bg-card/50 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-r border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-sans block mb-4">Contact</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-12">
              Démarrons votre <br/>projet
            </h2>

            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-1">Téléphone</div>
                  <div className="text-white font-sans">06 12 15 39 27</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-1">Email</div>
                  <div className="text-white font-sans">rsbatfrance@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-1">Adresse</div>
                  <div className="text-white font-sans">75000 Paris, Île-de-France</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-sans text-muted-foreground">Devis chiffré et transparent</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-sans text-muted-foreground">Conseils d'experts personnalisés</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-sans text-muted-foreground">Étude de faisabilité offerte</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Form */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-background">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Demande Envoyée</h3>
                <p className="text-muted-foreground font-sans text-sm mb-8">Nous avons bien reçu votre demande. Notre équipe vous contactera sous 48h.</p>
                <Button 
                  className="bg-transparent border border-white/20 hover:border-primary text-white font-display tracking-widest uppercase rounded-none px-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground uppercase text-[10px] tracking-widest font-sans">Nom Complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white font-sans placeholder:text-white/20 h-10" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground uppercase text-[10px] tracking-widest font-sans">Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="06 12 34 56 78" className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white font-sans placeholder:text-white/20 h-10" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground uppercase text-[10px] tracking-widest font-sans">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jean@exemple.com" className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white font-sans placeholder:text-white/20 h-10" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground uppercase text-[10px] tracking-widest font-sans">Type de Travaux</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary text-white font-sans h-10">
                                <SelectValue placeholder="Sélectionnez un service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-white/10 rounded-none">
                              {servicesList.map((service) => (
                                <SelectItem key={service} value={service} className="hover:bg-primary/20 focus:bg-primary/20 rounded-none font-sans text-sm">
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase text-[10px] tracking-widest font-sans">Description du projet</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre projet en détail..." 
                            className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white font-sans min-h-[100px] resize-none placeholder:text-white/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-widest h-14 rounded-none text-sm mt-8">
                    Envoyer la demande
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}