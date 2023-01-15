import React, { useState, useEffect } from 'react';

import '../scss/table.scss';
import chip1 from './image/chip1.png';
import chip2 from './image/chip2.png';
import chip3 from './image/chip3.png';
const Table = ({ currentBet = 5 }) => {
	var [activeSlot, setActiveSlot] = useState(3);
	var [isBetTime, setIsBetTime] = useState(true);
	var [betTime, setBetTime] = useState(5);
	var [betArr, setBetArr] = useState(new Array(25).fill(0));

	useEffect(() => {
		var interval = setInterval(() => {
			if (betTime === 0) {
				clearInterval(interval);
				setIsBetTime(false);
				$('#show_time').toggleClass('d-none');

				setTimeout(() => {}, 1000);
			} else {
				setBetTime(betTime - 1);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [betTime]);

	useEffect(() => {
		if (isBetTime) {
			$(`.choose_slot`).removeClass('d-none');
			$(`.player_slot`).removeClass('active');
			$(`.choose_slot:nth-child(${activeSlot})`).addClass('d-none');
			$(`.player_slot:nth-child(${activeSlot})`).addClass('active');
			/**clear chip on table when change slot */
			setBetArr(new Array(25).fill(0));
			$('.bet_chips').html(`<div className='bet_chips'></div>`);
		}
	}, [activeSlot]);

	function handleBetChip(slot, location) {
		if (activeSlot === slot && isBetTime) {
			let chipPath = chip1;
			let temp = betArr[location] + currentBet;
			if (temp > 5 && temp < 100) chipPath = chip2;
			else if (temp >= 100) chipPath = chip3;

			$(`.play_container div[location=${location}] .bet_chips`).html(`<img src='${chipPath}' alt='bet chip' />
			<span className='show_bet_chip'>${temp}</span>`);

			let newArr = [...betArr];
			newArr[location] = temp;
			setBetArr(newArr);
		}
	}

	return (
		<div id='table_container'>
			<div id='player_slot_container'>
				<div className='player_slot'>
					<div className='play_container'>
						<div className='play_bonus'>
							<div
								className='player_pair pair onActive'
								location={0}
								onClick={() => {
									handleBetChip(1, 0);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='tie onActive'
								location={1}
								onClick={() => {
									handleBetChip(1, 1);
								}}
							>
								<span>TIE</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='banker_pair pair onActive'
								location={2}
								onClick={() => {
									handleBetChip(1, 2);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
						</div>
						<div
							className='play_banker onActive'
							location={3}
							onClick={() => {
								handleBetChip(1, 3);
							}}
						>
							<span>BANKER</span>
							<div className='bet_chips'></div>
						</div>
						<div
							className='play_player onActive'
							location={4}
							onClick={() => {
								handleBetChip(1, 4);
							}}
						>
							<span>PLAYER</span>
							<div className='bet_chips'></div>
						</div>
					</div>
				</div>
				<div className='player_slot'>
					<div className='play_container'>
						<div className='play_bonus'>
							<div
								className='player_pair pair onActive'
								location={5}
								onClick={() => {
									handleBetChip(2, 5);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='tie onActive'
								location={6}
								onClick={() => {
									handleBetChip(2, 6);
								}}
							>
								<span>TIE</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='banker_pair pair onActive'
								location={7}
								onClick={() => {
									handleBetChip(2, 7);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
						</div>
						<div
							className='play_banker onActive'
							location={8}
							onClick={() => {
								handleBetChip(2, 8);
							}}
						>
							<span>BANKER</span>
							<div className='bet_chips'></div>
						</div>
						<div
							className='play_player onActive'
							location={9}
							onClick={() => {
								handleBetChip(2, 9);
							}}
						>
							<span>PLAYER</span>
							<div className='bet_chips'></div>
						</div>
					</div>
				</div>
				<div className='player_slot'>
					<div className='play_container'>
						<div className='play_bonus'>
							<div
								className='player_pair pair onActive'
								location={10}
								onClick={() => {
									handleBetChip(3, 10);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='tie onActive'
								location={11}
								onClick={() => {
									handleBetChip(3, 11);
								}}
							>
								<span>TIE</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='banker_pair pair onActive'
								location={12}
								onClick={() => {
									handleBetChip(3, 12);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
						</div>
						<div
							className='play_banker onActive'
							location={13}
							onClick={() => {
								handleBetChip(3, 13);
							}}
						>
							<span>BANKER</span>
							<div className='bet_chips'></div>
						</div>
						<div
							className='play_player onActive'
							location={14}
							onClick={() => {
								handleBetChip(3, 14);
							}}
						>
							<span>PLAYER</span>
							<div className='bet_chips'></div>
						</div>
					</div>
				</div>
				<div className='player_slot'>
					<div className='play_container'>
						<div className='play_bonus'>
							<div
								className='player_pair pair onActive'
								location={15}
								onClick={() => {
									handleBetChip(4, 15);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='tie onActive'
								location={16}
								onClick={() => {
									handleBetChip(4, 16);
								}}
							>
								<span>TIE</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='banker_pair pair onActive'
								location={17}
								onClick={() => {
									handleBetChip(4, 17);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
						</div>
						<div
							className='play_banker onActive'
							location={18}
							onClick={() => {
								handleBetChip(4, 18);
							}}
						>
							<span>BANKER</span>
							<div className='bet_chips'></div>
						</div>
						<div
							className='play_player onActive'
							location={19}
							onClick={() => {
								handleBetChip(4, 19);
							}}
						>
							<span>PLAYER</span>
							<div className='bet_chips'></div>
						</div>
					</div>
				</div>
				<div className='player_slot'>
					<div className='play_container'>
						<div className='play_bonus'>
							<div
								className='player_pair pair onActive'
								location={20}
								onClick={() => {
									handleBetChip(5, 20);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='tie onActive'
								location={21}
								onClick={() => {
									handleBetChip(5, 21);
								}}
							>
								<span>TIE</span>
								<div className='bet_chips'></div>
							</div>
							<div
								className='banker_pair pair onActive'
								location={22}
								onClick={() => {
									handleBetChip(5, 22);
								}}
							>
								<span>PAIR</span>
								<div className='bet_chips'></div>
							</div>
						</div>
						<div
							className='play_banker onActive'
							location={23}
							onClick={() => {
								handleBetChip(5, 23);
							}}
						>
							<span>BANKER</span>
							<div className='bet_chips'></div>
						</div>
						<div
							className='play_player onActive'
							location={24}
							onClick={() => {
								handleBetChip(5, 24);
							}}
						>
							<span>PLAYER</span>
							<div className='bet_chips'></div>
						</div>
					</div>
				</div>

				<div id='outner_trim'></div>
				<div id='inner_trim'>
					<div id='show_time'>
						<span>{betTime}</span>
					</div>
					<div id='card_table_container'>
						<div id='card_side_container'>
							<div id='result' className='d-none'>
								<span>BANKER WIN</span>
							</div>
							<div id='card_player_side' className='card_side'>
								<span className='side'>PLAYER</span>
								<div className='card_container'>
									<div className='spawn_card card'></div>
									<div className='spawn_card card'></div>
									<div className='hit_card card d-none'></div>
								</div>
								<span className='score'>0</span>
							</div>
							<div id='card_banker_side' className='card_side'>
								<span className='side'>BANKER</span>
								<div className='card_container'>
									<div className='spawn_card card'></div>
									<div className='spawn_card card'></div>
									<div className='hit_card card d-none'></div>
								</div>
								<span className='score'>0</span>
							</div>
						</div>
					</div>
				</div>
				<div id='choose_slot_container'>
					<div
						className='choose_slot'
						onClick={() => {
							if (isBetTime) {
								setActiveSlot(1);
							}
						}}
					>
						<div>
							<i className='fa-regular fa-plus'></i>
						</div>
					</div>
					<div
						className='choose_slot'
						onClick={() => {
							if (isBetTime) {
								setActiveSlot(2);
							}
						}}
					>
						<div>
							<i className='fa-regular fa-plus'></i>
						</div>
					</div>
					<div
						className='choose_slot'
						onClick={() => {
							if (isBetTime) {
								setActiveSlot(3);
							}
						}}
					>
						<div>
							<i className='fa-regular fa-plus'></i>
						</div>
					</div>
					<div
						className='choose_slot'
						onClick={() => {
							if (isBetTime) {
								setActiveSlot(4);
							}
						}}
					>
						<div>
							<i className='fa-regular fa-plus'></i>
						</div>
					</div>
					<div
						className='choose_slot'
						onClick={() => {
							if (isBetTime) {
								setActiveSlot(5);
							}
						}}
					>
						<div>
							<i className='fa-regular fa-plus'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
