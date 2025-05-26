"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Play, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useUrlShortner from "@/hooks/use-url-shortner";
import { useState } from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Background decoration */}
      <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-gradient-to-br from-orange-200 to-red-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-48 translate-y-48 rounded-full bg-gradient-to-tr from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge className="mb-6 border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <Star className="mr-1 h-3 w-3" />
            Trusted by 50M+ users worldwide
          </Badge>

          {/* Main headline */}
          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-7xl">
            Shorten links,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">amplify</span>{" "}
            results
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Build stronger connections between your content and your audience with branded links, QR codes, and a
            comprehensive link-in-bio solution.
          </p>

          {/* URL shortener form */}
          <Card className="mx-auto mb-12 max-w-2xl border-0 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardContent className="p-6">
              <URLForm />
              <p className="mt-4 text-sm text-gray-500">
                By clicking &quot;Shorten for free&quot; you agree to Snipr&apos;s Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 text-lg hover:from-orange-600 hover:to-red-600"
            >
              Get started free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 px-8 py-6 text-lg hover:border-gray-400">
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-sm text-gray-500">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Microsoft</div>
              <div className="text-2xl font-bold text-gray-400">Spotify</div>
              <div className="text-2xl font-bold text-gray-400">Adobe</div>
              <div className="text-2xl font-bold text-gray-400">Nike</div>
              <div className="text-2xl font-bold text-gray-400">Shopify</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const urlSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }),
});
type UrlFormValues = z.infer<typeof urlSchema>;

const URLForm = () => {
  const [ShortUrl, setShortUrl] = useState("");
  const { createSortUrl } = useUrlShortner();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UrlFormValues>({
    resolver: zodResolver(urlSchema),
  });

  const onSubmit = async (data: UrlFormValues) => {
    try {
      const shortUrl = await createSortUrl({ url: data.url });
      setShortUrl(shortUrl.data);
      reset();
    } catch (error) {
      // Optionally handle error (show toast, etc)
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Input
            {...register("url")}
            placeholder="Paste your long URL here"
            className="h-14 w-full border-gray-200 text-lg focus:border-orange-500 focus:ring-orange-500"
            disabled={isSubmitting}
          />
          {errors.url && <p className="mt-1 text-sm text-red-500">{errors.url.message}</p>}
        </div>
        <Button
          type="submit"
          className="h-14 bg-gradient-to-r from-orange-500 to-red-500 px-8 text-lg font-semibold hover:from-orange-600 hover:to-red-600"
          disabled={isSubmitting}
        >
          Shorten for free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
      <Link href={ShortUrl} target="_blank" className="mt-4 text-blue-600 hover:underline">
        {ShortUrl}
      </Link>
    </>
  );
};
