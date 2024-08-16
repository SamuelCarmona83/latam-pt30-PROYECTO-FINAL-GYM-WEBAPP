
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Authentication data
			message: null, // Mensaje de éxito o error
			isAuthenticated: false, // Estado de autenticación del usuario
			userToken: null, // Token JWT
			user: {}, // Información del usuario autenticado

			//MEMBERS
			members: [
				{
					id: "1",
					name: 'John',
					lastname: 'Doe',
					gender: 'male',
					height: '180 cm',
					weight: '75 kg',
					birthday: '1990-01-01',
					city: 'New York',
					country: 'USA',
				},
				{
					id: "2",
					name: 'Jane',
					lastname: 'Smith',
					gender: 'female',
					height: '165 cm',
					weight: '60 kg',
					birthday: '1985-05-15',
					city: 'Los Angeles',
					country: 'USA',
				},
			],
			member: {},

			//WORKOUTS
			workouts: [
				{
					id: "1",
					name: "Plan 1",
					days: [
						{
							day: "Day 1",
							muscle_group: [
								{ name: "Leg" },
								{ name: "Arms" }
							],
							exercises: [
								{ name: "Pullups", reps: 8, sets: 4, rest_time: "20s", description: "Heavy" },
								{ name: "Pushups", reps: 15, sets: 4, rest_time: "20s", description: "Light" },
								{ name: "Bar", reps: 20, sets: 4, rest_time: "20s", description: "Increment weight" },
								{ name: "Pullups", reps: 10, sets: 3, rest_time: "20s", description: "Heavy" },
								{ name: "Pushups", reps: 20, sets: 3, rest_time: "20s", description: "Increment weight" },
								{ name: "Bar", reps: 25, sets: 3, rest_time: "20s", description: "Light" },
								{ name: "Peckfly", reps: 12, sets: 3, rest_time: "20s", description: "Heavy" },
							],
						},
						{
							day: "Day 2",
							muscle_group: [
								{ name: "abs" },
								{ name: "shoulders" }
							],
							exercises: [
								{ name: "Pullups", reps: 10, sets: 3, rest_time: "20s", description: "Heavy" },
								{ name: "Pushups", reps: 20, sets: 3, rest_time: "20s", description: "Increment weight" },
								{ name: "Bar", reps: 25, sets: 3, rest_time: "20s", description: "Light" },
								{ name: "Peckfly", reps: 12, sets: 3, rest_time: "20s", description: "Heavy" },
								{ name: "Pullups", reps: 10, sets: 3, rest_time: "20s", description: "Heavy" },
								{ name: "Pushups", reps: 20, sets: 3, rest_time: "20s", description: "Increment weight" },
							],
						},
					],
				},
				{
					id: "2",
					name: "Plan 2",
					days: [
						{
							day: "Day 1",
							muscle_group: [
								{ name: "abs" },
								{ name: "shoulders" }
							],
							exercises: [
								{ name: "Pullups", reps: 8, sets: 4, rest_time: "20s", description: "" },
								{ name: "Pushups", reps: 15, sets: 4, rest_time: "20s", description: "" },
								{ name: "Bar", reps: 20, sets: 4, rest_time: "20s", description: "" },
							],
						},
						{
							day: "Day 2",
							muscle_group: [
								{ name: "abs" },
								{ name: "shoulders" }
							],
							exercises: [
								{ name: "Pullups", reps: 10, sets: 3, rest_time: "20s", description: "" },
								{ name: "Pushups", reps: 20, sets: 3, rest_time: "20s", description: "" },
								{ name: "Bar", reps: 25, sets: 3, rest_time: "20s", description: "" },
								{ name: "Peckfly", reps: 12, sets: 3, rest_time: "20s", description: "" },
							],
						},
					],
				},

			],
			muscle_groups: [],

			//BODY MEASUREMENTS
			body_measurements: [
				{
					id: "1",
					height: "174",
					weight: "77",
					neck: "45",
					relaxed_arm: "35",
					flexed_arm: "37",
					waist: "80",
					calves: "32",
					chest: "96",
					hips: "105",
					thighs: "50",
					shoulders: "122"
				},
				{
					id: "2",
					height: "174",
					weight: "77",
					neck: "45",
					relaxed_arm: "35",
					flexed_arm: "37",
					waist: "80",
					calves: "32",
					chest: "96",
					hips: "105",
					thighs: "50",
					shoulders: "122"
				}
			],

			//OTHERS
			videos: [],
			valExercises: []
		},

		actions: {
			//LOGIN , SIGN UP & LOG OUT FETCH ZONE ________________________________
			//SignUp.js
			postSignup: (email, password) => {
				console.log(email, password)
				fetch(process.env.BACKEND_URL + "/api/signup", {
					method: "POST",
					body: JSON.stringify({ email, password }), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					},
				})
					.then(res => {
						if (!res.ok) {
							throw new Error(`HTTP error! status: ${res.status}`);
						}
						return res.json();
					})
					.then(response => {
						console.log("Success:", response);
						return true
					})
					.catch(error => console.error("Error:", error));
			},
			// postSignup: async (email, password, date) => {
			// 	try {
			// 		const res = await fetch(process.env.BACKEND_URL + "/api/signup", {
			// 			method: "POST",
			// 			body: JSON.stringify({ email, password, date }),
			// 			headers: {
			// 				"Content-Type": "application/json"
			// 			},
			// 		});
			// 		if (!res.ok) {
			// 			throw new Error(`HTTP error! status: ${res.status}`);
			// 		}
			// 		const response = await res.json();
			// 		console.log("Success:", response);
			// 		setStore({ user: response.user, userToken: response.token });
			// 		return true;
			// 	} catch (error) {
			// 		console.error("Error:", error);
			// 		return false;
			// 	}
			// },


			//Login.js
			postLogin: (email, password) => {
				console.log("Login credentials:", email, password)
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify({ email, password }), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(res => res.json())
					.then(data => {
						if (data.token) {
							localStorage.setItem("accessToken", data.token);
							localStorage.setItem("accessId", data.user.id);
							setStore({ user: data.user, userToken: data.token });
							console.log("VALOR DE LOCALSTORAGE *** ", localStorage.getItem('accessToken'));
						} else {
							throw new Error('Invalid login response');
						}
					})
					.catch(error => console.error("Error:", error));

			},

			//Get current User
			getCurrentUser: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/current_user", {
					headers: {
						Authorization: "Bearer" + localStorage.getItem("accessToken")
					}
				})
				let data = await response.json()
				if (response.ok) {
					setStore({ user: data })
				}
			},

			//Footer.js
			logOut: () => {
				setStore({ user: null });
			},


			//MEMBERS FETCH ZONE_______________________________________________________

			//CREATE MEMBER
			// Function to create a new member
			createMember: async (memberData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`, // Add token for authentication
						},
						body: JSON.stringify(memberData),
					});
					const data = await response.json();
					if (response.ok) {
						console.log("Member created successfully");
						return true;
					} else {
						console.error(data.message);
						return false;
					}
				} catch (error) {
					console.error("Error creating member:", error);
					return false;
				}
			},


			//UPDATE MEMBER
			updateMember: async (id, memberData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`, // Add token for authentication
						},
						body: JSON.stringify(memberData),
					});
					const data = await response.json();
					if (response.ok) {
						console.log("Member updated successfully");
						return true;
					} else {
						console.error(data.message);
						return false;
					}
				} catch (error) {
					console.error("Error updating member:", error);
					return false;
				}
			},

			// Function to get a member by ID
			getMemberById: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${id}`, {
						headers: {
							"Authorization": `Bearer ${getStore().userToken}`, // Add token for authentication
						}
					});
					const data = await response.json();
					if (response.ok) {
						setStore({ member: data });
					} else {
						console.error('Error fetching member by ID:', data.message);
					}
				} catch (error) {
					console.error("Error fetching member by ID:", error);
				}
			},

			// Function to delete a member
			deleteMember: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${id}`, {
						method: "DELETE",
						headers: {
							"Authorization": `Bearer ${getStore().userToken}`, // Add token for authentication
						},
					});
					if (response.ok) {
						setStore({
							members: getStore().members.filter(member => member.id !== id)
						});
					} else {
						console.error('Error deleting member');
					}
				} catch (error) {
					console.error('Error deleting member:', error);
				}
			},

			// getAllMembers: async () => {
			// 	try {
			// 		const response = await fetch(`${process.env.BACKEND_URL}/api/members`, {
			// 			headers: {
			// 				"Authorization": `Bearer ${getStore().userToken}`, // Add token for authentication
			// 			}
			// 		});
			// 		const data = await response.json();
			// 		if (response.ok) {
			// 			setStore({ members: data });
			// 		} else {
			// 			console.error('Error fetching members:', data.message);
			// 		}
			// 	} catch (error) {
			// 		console.error("Error fetching members:", error);
			// 	}
			// },

			//EXERCISES FETCH ZONE________________________________________

			//GET MUSCLE GRUOPS
			//DayForm.js
			getMuscleGroups: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/muscle-groups`);
					const data = await response.json();
					setStore({ muscle_groups: data });
				} catch (error) {
					console.error("Error fetching muscle groups:", error);
				}
			},

			//GET WORKOUTS
			//POSSIBLEEEE Dashboard.js // NO SE ESTA USANDO EL TOKEN
			getWorkouts: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/workouts`);
					if (!response.ok) throw new Error("Failed to fetch workouts");
					const data = await response.json();
					setStore({ workouts: data });
				} catch (error) {
					console.error("Error fetching workouts:", error);
				}
			},

			//UPDATE WORKOUT
			//CreateEditPlan.jsx
			updateWorkout: async (id, updatedWorkout) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/workouts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`
						},
						body: JSON.stringify(updatedWorkout),
					});
					if (!response.ok) throw new Error("Failed to update workout");
					const data = await response.json();
					const store = getStore();
					const updatedWorkouts = store.workouts.map(workout => {
						if (workout.id === id) {
							return { ...workout, ...data };
						}
						return workout;
					});
					setStore({ workouts: updatedWorkouts });
				} catch (error) {
					console.error("Error updating workout:", error);
				}
			},

			//CREATE WORKOUT
			//CreateEditPlan.jsx
			createWorkout: async (workout) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/workouts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`
						},
						body: JSON.stringify(workout),
					});
					if (!response.ok) throw new Error("Failed to add workout");
					const data = await response.json();
					const store = getStore();
					setStore({ workouts: [...store.workouts, data] });
				} catch (error) {
					console.error("Error creating workout:", error);
				}
			},

			//DELETE WORKOUT
			//POSSSIBLEEEE CreateEditPlan.jsx
			deleteWorkout: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/workouts/${id}`, {
						method: "DELETE",
					});
					if (!response.ok) throw new Error("Failed to delete workout");
					const store = getStore();
					const updatedWorkouts = store.workouts.filter(workout => workout.id !== id);
					setStore({ workouts: updatedWorkouts });
				} catch (error) {
					console.error("Error deleting workout:", error);
				}
			},


			//GET WORKOUT BY ID
			//POSSIBLEEEE Dashboard.js // NO SE ESTA USANDO EL TOKEN
			getWorkoutById: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/workouts/${id}`);
					const data = await response.json();
					setStore({ workouts: store.workouts.map(workout => workout.id === id ? data : workout) });
				} catch (error) {
					console.error("Error fetching workout by ID:", error);
				}
			},




			//MEASUREMENT FETCH ZONE_______________________________________________________

			//CREATE MEASUREMENT
			// Function to fetch measurements data for a specific member
			getMeasurementsByMemberId: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${id}/measurements`, {
						headers: {
							"Authorization": `Bearer ${getStore().userToken}`,
						},
					});
					const data = await response.json();
					if (response.ok) {
						setStore({ body_measurements: data });
					} else {
						console.error('Error fetching measurements:', data.message);
					}
				} catch (error) {
					console.error("Error fetching measurements:", error);
				}
			},


			// Function to create a new measurement for a member
			createBodyMeasurement: async (memberId, measurementData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${memberId}/measurements`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`,
						},
						body: JSON.stringify(measurementData),
					});
					const data = await response.json();
					if (response.ok) {
						console.log("Measurement created successfully");
						return true;
					} else {
						console.error(data.message);
						return false;
					}
				} catch (error) {
					console.error("Error creating measurement:", error);
					return false;
				}
			},

			// Function to update measurements
			updateBodyMeasurement: async (id, measurementData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/measurements/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`,
						},
						body: JSON.stringify(measurementData),
					});
					const data = await response.json();
					if (response.ok) {
						const updatedMeasurements = getStore().body_measurements.map(measurement =>
							measurement.id === id ? data : measurement
						);
						setStore({ body_measurements: updatedMeasurements });
						console.log("Measurement updated successfully");
						return true;
					} else {
						setStore({ message: data.message });
						return false;
					}
				} catch (error) {
					console.error("Error updating measurement:", error);
					return false;
				}
			},



			// **** Fin se adiciona Singup y login 16 de julio de 2024 9:22 a.m. Por GE
			//FETCHING EXERCISES FOR PRUEBA EXERCISES

			getExercises: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/exercises")
					const data = await resp.json()
					setStore({ valExercises: data })
					console.log("VALORES DE EXERCISES", data)
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},




			//GRAPHICS___________________________________________
			// Function to fetch graphics data for a specific member
			getGraphicsByMemberId: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${id}/graphics`, {
						headers: {
							"Authorization": `Bearer ${getStore().userToken}`,
						},
					});
					const data = await response.json();
					if (response.ok) {
						setStore({ graphics: data });
					} else {
						console.error('Error fetching graphics:', data.message);
					}
				} catch (error) {
					console.error("Error fetching graphics:", error);
				}
			},


			// Function to create new graphics for a member
			createGraphics: async (memberId, graphicsData) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/members/${memberId}/graphics`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${getStore().userToken}`,
						},
						body: JSON.stringify(graphicsData),
					});
					const data = await response.json();
					if (response.ok) {
						setStore({ message: "Graphics created successfully" });
						return true;
					} else {
						setStore({ message: data.message });
						return false;
					}
				} catch (error) {
					console.error("Error creating graphics:", error);
					setStore({ message: "Error creating graphics" });
					return false;
				}
			},


			// Function to update graphics
			updateGraphics: (id, graphicsData) => {
				setStore({
					graphics: getStore().graphics.map(graphic => graphic.id === id ? { ...graphic, ...graphicsData } : graphic)
				});
			},
			// VIDEOS____________________________________
			getVideos: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/videos`);
					const data = await response.json();
					setStore({ videos: data });
				} catch (error) {
					console.error("Error fetching videos:", error);
				}
			},
			// Otras funciones aquí...
		},
	};
};



export default getState;
