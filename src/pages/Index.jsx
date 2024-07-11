import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Link } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                SaaS Startup
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="/">Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Workflow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your business processes with our cutting-edge SaaS solution.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                { title: "Automated Workflows", description: "Streamline your processes with intelligent automation." },
                { title: "Real-time Analytics", description: "Get instant insights with our powerful analytics tools." },
                { title: "Seamless Integration", description: "Easily connect with your favorite tools and platforms." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                { title: "Basic", price: "$9.99/mo", features: ["Feature 1", "Feature 2", "Feature 3"] },
                { title: "Pro", price: "$19.99/mo", features: ["All Basic features", "Feature 4", "Feature 5"] },
                { title: "Enterprise", price: "Custom", features: ["All Pro features", "Feature 6", "Feature 7"] },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  We are a passionate team of innovators dedicated to simplifying complex business processes. Our mission is to empower organizations with cutting-edge SaaS solutions that drive efficiency and growth.
                </p>
              </div>
              <div className="flex-1">
                <img src="/placeholder.svg" alt="Team" className="rounded-lg object-cover w-full h-[300px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Link className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 SaaS Startup. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;