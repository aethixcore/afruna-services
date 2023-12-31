"use client";

// import Chat from "@/services/chat.service";
// import axios from "axios";
import { FC } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { IoPaperPlane } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

interface MessageInput {
	message: string;
}

interface CoversationFooterProps {
	to: string;
}

export const CoversationFooter: FC<CoversationFooterProps> = ({ to }) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isValid },
	} = useForm<MessageInput>();

	const conversationId = "Gsdjksdh2112";

	const onSubmit: SubmitHandler<MessageInput> = (data) => {
		// const chatServices = new Chat();
		// if (isValid) {
		// 	chatServices.sendMessage({
		// 		to: to,
		// 		message: data as unknown as string,
		// 	});
		// 	setValue("message", "", { shouldValidate: true });
		// }
		// return;
	};

	const handleUpload = (data: any) => {
		// axios.post("/api/message", {
		// 	image: data,
		// 	conversationId,
		// });
	};

	return (
		<div className="pt-1 pb-4 px-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="ml-2 mr-4 bg-white flex  items-center relative border border-[#D5D5E6] rounded-xl overflow-hidden"
			>
				<input
					id="message"
					type="text"
					autoComplete="message"
					placeholder="Message..."
					{...register("message", {
						required: true,
					})}
					className="w-full p-3 pr-1 font-semibold text-gray-600 text-sm focus:outline-none placeholder:text-[#DBDBDB]"
				/>
				<div onClick={handleUpload} className=" min-w-[6rem] xl:min-w-[8rem]">
					<MdAttachFile
						size={37}
						className="text-[#0C0E3B] hover:scale-90 transition duration-300 p-2 cursor-pointer"
					/>
				</div>
				<button
					type="submit"
					className="w-28 h-28 flex justify-start items-end p-4 absolute rounded-full -bottom-2 -right-12 bg-[#00AEEF]"
				>
					<IoPaperPlane
						size={30}
						className="text-white hover:scale-90 transition duration-300 cursor-pointer"
					/>
				</button>
			</form>
		</div>
	);
};
