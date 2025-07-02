"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { useParams } from "next/navigation";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
    title: z.string().min(2, { message: "Job Title must be at least 2 characters." }),
    description: z.string().nonempty({ message: "Description is required." }),
    location: z.string().nonempty({ message: "Location is required." }),
});

export function InputForm({ postId }) {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            description: "",
            location: "",
        },
    });
    // Fetch the post data if editing
    useEffect(() => {
        if (postId) {
            axios.get(`/api/jobs/${postId}`)
                .then(response => {
                    const { title, description, location } = response.data.job;
                    form.setValue('title', title);
                    form.setValue('description', description);
                    form.setValue('location', location);
                })
                .catch(error => {
                    console.error("Error fetching post data:", error);
                });
        }
    }, [postId]);

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await axios.put(`/api/jobs/${postId}`, data);
            if (response.status === 201) {
                toast({
                    variant: '',
                    title: "Data updated successfully",
                    // description: "There was a problem with your request.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                });
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An unexpected error occurred.");
        }
        finally { setLoading(false) }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded px-7">
                {/* Username Field */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-gray-700">Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Job Title" {...field} aria-label="title" className="border border-gray-500" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Designation Field */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-700">Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" {...field} aria-label="description" className="border border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Designation Field */}
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-700">Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="Location" {...field} aria-label="location" className="border border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">{!loading ? 'Submit' : 'Loading...'}</Button>
            </form>
        </Form>
    );
}

const EditPost = () => {
    const param = useParams();
    const postId = param.id
    return (
        <div className="">
            <div className="flex justify-between">
                <h1 className='font-bold text-gray-700 text-2xl mb-7'>Add New Job</h1>
                <Link href="/admin/manage-posts/manage">
                    <Button className="">All Jobs</Button>
                </Link>
            </div>
            <div className='p-5 bg-gray-100 rounded '>
                <InputForm postId={postId} />
                <Toaster />
            </div>
        </div>
    )
}


export default EditPost;